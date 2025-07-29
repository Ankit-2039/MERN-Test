import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';


dotenv.config();

const app = express();

app.use(express.json());// Middleware to parse JSON bodies allows JSON data to be sent in requests

app.use('/api/products', productRoute); // Use the product routes defined in product.route.js

const PORT = process.env.PORT || 5000; // Default to port 5000 if not specified in .env

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost:' + PORT);
    });
