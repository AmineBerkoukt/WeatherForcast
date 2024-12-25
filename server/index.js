import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import weatherRoutes from './src/routes/weatherRoutes.js';
import scrapedData from './src/utils/scrapper.js';
import testScrapper from './src/scrappers/testScrapper.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/weather', weatherRoutes);
app.use("/", testScrapper);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
