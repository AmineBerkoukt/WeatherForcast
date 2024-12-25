import express from 'express';
import { getWeather } from '../controllers/weatherController.js';

const router = express.Router();

router.get('/scrape', getWeather );

export default router;
