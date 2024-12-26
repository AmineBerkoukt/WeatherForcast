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

        const days = [2, 3, 4, 5, 6, 7];
        const labels = ['today', 'tomorrow', 'todayPlus2', 'todayPlus3', 'todayPlus4', 'todayPlus5'];
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
        console.error('(scrappers/testScrapper.js) : Error occurred during scraping:', error.message);
        res.status(500).json({ message: "ERROR in scrappers/testScrapper: " + error.message });
    }
};

export default testScrapper;
