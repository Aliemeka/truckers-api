import { config } from 'dotenv';

config();

require('dotenv').config();

export const dbURl = process.env.MONGO_URI;
export const port = process.env.PORT || 5000;
export const baseUrl = process.env.BASE_URL || 'http://localhost:5000/api/v1';
