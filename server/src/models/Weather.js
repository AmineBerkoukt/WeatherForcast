import mongoose from 'mongoose';

const WeatherSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    temperature: { type: String, required: true },
    humidity: { type: String, required: true },
    condition: { type: String, required: true },
}, {timestamps: true});

const Weather = mongoose.model('Weather', WeatherSchema);

export default Weather;
