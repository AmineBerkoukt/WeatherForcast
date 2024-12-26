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

        const days = [2, 3, 4, 5, 6, 7];
        const weatherStates = {};

        days.forEach(day => {
            let tempWeatherState = "";
            let tempPrecipitation = $(`a[href="/previsions/tanger#jour-${day}"] > label[class^="weathericon-small-small-heur-jour meddelt"]`).attr('class').trim();

            switch (tempPrecipitation) {
                case "weathericon-small-small-heur-jour meddelt-113":
                    tempWeatherState = "Sunny"
                    break;

                case "weathericon-small-small-heur-jour meddelt-116":
                    tempWeatherState = "Sunny & Cloudy"
                    break;

                case "weathericon-small-small-heur-jour meddelt-119":
                    tempWeatherState = "Extremely Cloudy"
                    break;

                case "weathericon-small-small-heur-jour meddelt-266":
                    tempWeatherState = "Rainy"
                    break;

                case "weathericon-small-small-heur-jour meddelt-389":
                    tempWeatherState = "Heavily Rainy"
                    break;

                default:
                    tempWeatherState = "Not available";
                    break;
            }

            weatherStates[`TodayPlus${day - 1}`] = tempWeatherState;
        })


        res.status(200).json(weatherStates);

    } catch (error) {
        console.error('(scrappers/wheatherStateScrapper.js) : Error occurred during scraping:', error);
    }
};

export default weatherData;
