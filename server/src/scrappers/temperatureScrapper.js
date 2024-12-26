import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import { config } from 'dotenv';

config();

let baseURL = process.env.BASE_URL || "https://www.meteomaroc.com/meteo/tanger";


// Need to extract the high and the low temperature for today & the next 7 days
const temperatureData = async () => {
   try {
        const response = await requestPromise(baseURL);
        const $ = cheerio.load(response);
        console.log("cheerio loaded !");

        const todayTemperature = $('li > a[href="/previsions/tanger#jour-1"] > label.observation_c-small').text().trim();
       
        const [todayHigh, todayLow] = todayTemperature.split("°", 2);

        const days = [2, 3, 4, 5, 6, 7];
        const temperatures = {
            Today: { high: todayHigh, low: todayLow }
        };

        days.forEach(day => {
            const tempText = $(`li > a[href="/previsions/tanger#jour-${day}"] > label.observation_c-small`).text().trim();
            const [high, low] = tempText.split("°", 2);
            temperatures[`TodayPlus${day - 1}`] = { high, low };
        });

        res.status(200).json(temperatures);

    } catch (error) {
        console.error('(scrappers/temperatureScrapper.js) : Error occurred during scraping:', error);
    }
};

export default temperatureData;
