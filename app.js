import express from 'express';
import router from './routes/index.routes.js';
import dotenv from 'dotenv';
import { connDB } from './config/db.config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT} : http://localhost:${PORT}`);
    connDB();
});
