import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import { config } from 'dotenv';

config();

baseURL = process.env.BASE_URL || "https://www.meteomaroc.com/meteo/tanger";
//precipmm-0
// Need to extract the average percipitations for today & the next 7 days
const precipitationsData = async () => {
    try {
            const response = await requestPromise(baseURL);
            const $ = cheerio.load(response);
            console.log("cheerio loaded !");
            
            const labels = ['today', 'tomorrow', 'todayPlus2', 'todayPlus3', 'todayPlus4', 'todayPlus5'];
            const precipitations = {};
            
            for (let i = 0; i <= 5; i++) {
                const precipitation = $('ul.previsiondecjour-total-bottomaccueil > a > li[class^="precipmm"]').eq(i).text().trim();
                precipitations[labels[i]] = precipitation;
            }
            
            console.log(precipitations);
    
            res.status(200).json(precipitations);
    
    }catch (error) {
        console.error('(scrappers/percipitationsScrapper.js) : Error occurred during scraping:', error);
    }
};

export default precipitationsData;
