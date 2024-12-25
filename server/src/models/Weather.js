import mongoose from 'mongoose';

const WeatherSchema = new mongoose.Schema({
    date: { type: String, required: false },
    temperatureMax: { type: String, required: false },
//    temperatureMin: { type: String, required: false },

//  temperatures: {
//     temperatureMax: { type: String, required: false }, 
//     temperatureMin: { type: String, required: false }   
// }

//  pecipitations: { type: String, required: false },
//  windSpeed: { type: String, required: false},
//  humidity: { type: String, required: false},
//  wheaterState: { type: String, required: false, enum: ["Sunny", "Clear", "Cloudy", "Rainy", "Windy"] },
});




const Weather = mongoose.model('Weather', WeatherSchema);

export default Weather;
