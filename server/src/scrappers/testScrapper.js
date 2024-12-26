import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import { config } from 'dotenv';

config();

const baseURL = process.env.BASE_URL || "https://www.meteomaroc.com/meteo/tanger";

//Test scrappers here !
const testScrapper = async (req, res) => {
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
        console.error('(scrappers/testScrapper.js) : Error occurred during scraping:', error);
        res.status(500).json({ message: "ERROR in scrappers/testScrapper: " + error.message });
    }
};

export default testScrapper;
