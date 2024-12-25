import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import { config } from 'dotenv';

config();

baseURL = process.env.BASE_URL || "https://www.meteomaroc.com/meteo/tanger";

// Need to extract the weather state (sunny, rainy, cloudy ...) today & the next 7 days
const weatherData = async () => {
    try {  
        const response = await requestPromise(baseURL); 

        const $ = cheerio.load(response);  
        console.log("cheerio loaded !");

       
        console.log("Scrap test : " , response);

    }catch (error) {
        console.error('(scrappers/wheatherStateScrapper.js) : Error occurred during scraping:', error);
    }
};

export default weatherData;
