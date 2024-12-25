import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import { config } from 'dotenv';

config();

baseURL = process.env.BASE_URL || "https://www.meteomaroc.com/meteo/tanger";


// Need to extract the high and the low temperature for today & the next 7 days
const temperatureData = async () => {
    try {  
        const response = await requestPromise(baseURL); 

        const $ = cheerio.load(response);  
        console.log("cheerio loaded !");

       
        console.log("Scrap test : " , response);

    }catch (error) {
        console.error('(scrappers/temperatureScrapper.js) : Error occurred during scraping:', error);
    }
};

export default temperatureData;
