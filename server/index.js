import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
// import weatherRoutes from './src/routes/weatherRoutes.js';
import scrapedData from './src/utils/scrapper.js';

dotenv.config();
connectDB();

const app = express();

scrapedData();

app.use(express.json());
// app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
