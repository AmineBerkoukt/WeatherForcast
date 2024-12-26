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



        const days = [1, 2, 3, 4, 5, 6, 7];
        const rainProbabilities = {};

        days.forEach(day => {
            const tempProbability = $(`ul.previsiondecjour-total-bottomaccueil > a[href="/previsions/tanger#jour-${day}"] > li.precipmm`)
                .text().trim();
            if (day === 1) {
                rainProbabilities[`Today`] = tempProbability;
            } else if (day === 2) {
                rainProbabilities[`Tomorrow`] = tempProbability;
            } else {
                rainProbabilities[`TodayPlus${day - 1}`] = tempProbability;
            }
        });

        console.log(rainProbabilities)

        res.status(200).json(rainProbabilities);

    } catch (error) {
        console.error('(scrappers/testScrapper.js) : Error occurred during scraping:', error.message);
        res.status(500).json({ message: "ERROR in scrappers/testScrapper: " + error.message });
    }
};

export default testScrapper;
