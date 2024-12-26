import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import { config } from 'dotenv';

config();

baseURL = process.env.BASE_URL || "https://www.meteomaroc.com/meteo/tanger";

// Need to extract the highest & lowest temperatures for today & the next 7 days
const windSpeedData = async () => {
    try {
        const response = await requestPromise(baseURL);
        const $ = cheerio.load(response);
        console.log("cheerio loaded !");

        const labels = ['today', 'tomorrow', 'todayPlus2', 'todayPlus3', 'todayPlus4', 'todayPlus5'];
        const windSpeeds = {};

        for (let i = 0; i <= 5; i++) {
            const windSpeed = $('ul.previsiondecjour-total-bottomaccueil > a > li[class^="windspeedKmph"]').eq(i).text().trim();
            windSpeeds[labels[i]] = windSpeed;
        }

        console.log(windSpeeds);

        res.status(200).json(windSpeeds);

    } catch (error) {
        console.error('(scrappers/windSpeedScrapper.js) : Error occurred during scraping:', error);
    }
};

export default windSpeedData;
