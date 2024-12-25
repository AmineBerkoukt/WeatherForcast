import { config } from "dotenv";
import Weather from "../models/Weather.js";
import scrapper from "../utils/scrapper.js";

config();

export const getWeather = async (req, res) => {
    try {
        // Scrape the data
        const weekWeatherData = await scrapper();
        console.log("weekWeatherData:", weekWeatherData);

        // Prepare the data in the right format for MongoDB insertion
        const weatherArray = Object.values(weekWeatherData).map(day => ({
            date: day.date,
            temperature: day.temperature
        }));

        // Delete old weather data
        await Weather.deleteMany();

        // Insert the new scraped data
        const newWeather = await Weather.insertMany(weatherArray);

        // Get all weather data after insert
        const allData = await Weather.find();

        // Respond with before and after data
        res.status(200).json({
            beforeInsert: allData,
            afterInsert: newWeather
        });
    } catch (error) {
        // Handle errors
        res.status(404).json({ message: error.message });
    }
};
