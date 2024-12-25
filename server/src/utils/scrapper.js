import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';

const baseURL = "https://www.meteomaroc.com/meteo/tanger"
//`https://www.meteomaroc.com/meteo/${city}`

const scrapedData = async () => {
    try {
        const response = await requestPromise(baseURL); 
        //console.log(response);

        const $ = cheerio.load(response);  
        console.log("cheerio loaded !");

        const temperature = $('label.observation_c').text().trim();
        console.log('weather:', temperature);

        
    }catch (error) {
        console.error('Error occurred during scraping:', error);
    }
};

export default scrapedData;
