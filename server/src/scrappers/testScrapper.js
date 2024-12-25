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

        //Scraping here
        //use .content to debug then use the method .eq() or .first()

        const todayTemperature = $('label.observation_c').text().trim();






        res.status(200).json({
            scrappedData : todayTemperature
        });
    } catch (error) {
        console.error('(scrappers/testScrapper.js) : Error occurred during scraping:', error);
        res.status(500).json({ message: "ERROR in scrappers/testScrapper" + error.message });
    }
};

export default testScrapper;
