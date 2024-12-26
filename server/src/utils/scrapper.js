import requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import getCurrentDate , {getNextSevenDays} from './currentDate.js';


const baseURL = "https://www.meteomaroc.com/meteo/tanger"
//`https://www.meteomaroc.com/meteo/${city}`

const scrapedData = async () => {
    try {
        const todayDate = getCurrentDate();
        const nextDates = getNextSevenDays();

        
        const response = await requestPromise(baseURL); 

        const $ = cheerio.load(response);  
        console.log("cheerio loaded !");

        const todayTemperature = $('label.observation_c').text().trim();     
        const tomorrowTemperature = $('li > a[href="/previsions/tanger#jour-2"] > label.observation_c-small')
        .contents().first().text().trim();

        console.log("Today temperature : " , todayTemperature);

        console.log("Tomorrow temperature : " , tomorrowTemperature);

        const tomorrowTemperature2 = $('li > a[href="/previsions/tanger#jour-2"] > label.observation_c-small')
        .contents().eq(2).text().trim();
        

        
        const todayPlusTwoTemperature = $('label.observation_c-small').eq(2).text().trim();
        const todayPlusThreeTemperature = $('label.observation_c-small').eq(4).text().trim();
        const todayPlusFourTemperature = $('label.observation_c-small').eq(6).text().trim();
        const todayPlusFiveTemperature = $('label.observation_c-small').eq(8).text().trim();
        const todayPlusSixTemperature = $('label.observation_c-small').eq(10).text().trim();

        const day0 = { date: todayDate, temperature: todayTemperature };
        const day1 = { date: nextDates[0], temperature: tomorrowTemperature };
        const day2 = { date: nextDates[1], temperature: todayPlusTwoTemperature };
        const day3 = { date: nextDates[2], temperature: todayPlusThreeTemperature };
        const day4 = { date: nextDates[3], temperature: todayPlusFourTemperature };
        const day5 = { date: nextDates[4], temperature: todayPlusFiveTemperature };
        const day6 = { date: nextDates[5], temperature: todayPlusSixTemperature };


        const weekWeather = {
            day0, day1, day2, day3, day4, day5, day6
        }
        

        console.log("Scrap test : " , tomorrowTemperature2);


        console.log("Weeks weather : " ,weekWeather);
        return weekWeather;
    }catch (error) {
        console.error('(utils/scrapper.js) : Error occurred during scraping:', error);
    }
};

export default scrapedData;
