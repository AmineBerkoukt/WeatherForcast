import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import { config } from 'dotenv';

config();

baseURL = process.env.BASE_URL || "https://www.meteomaroc.com/meteo/tanger";

// Need to extract the average humidity today & the next 7 days
// target class : precipmm
const rainProbabilityData = async () => {
    try {
        const response = await requestPromise(baseURL);
        const $ = cheerio.load(response);
        console.log("cheerio loaded !");



        const days = [1, 2, 3, 4, 5, 6, 7];
        const rainProbabilities = {};

        days.forEach(day => {
            const tempProbability = $(`ul.previsiondecjour-total-bottomaccueil > a[href="/previsions/tanger#jour-${day}"] > li.precipmm`)
                .text().trim();
            if (day === 1) {
                rainProbabilities[`Today`] = tempProbability;
            } else if (day === 2) {
                rainProbabilities[`Tomorrow`] = tempProbability;
            } else {
                rainProbabilities[`TodayPlus${day - 1}`] = tempProbability;
            }
        });

        console.log(rainProbabilities)

        res.status(200).json(rainProbabilities);

    } catch (error) {
        console.error('(scrappers/rainProbabilityData.js) : Error occurred during scraping:', error);
    }
};

export default rainProbabilityData;
