import express from 'express';
import router from './routes/index.routes.js';
import dotenv from 'dotenv';
import { connDB } from './config/db.config.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Hello World');
    console.log("get", "Hello World");
});

app.get('/ping', async (req, res) => {
    res.send('pong');
    console.log("get", "pong");
});

app.use('/api', router);

app.listen(PORT, async () => {
    console.log(`🚀 Server is running on port ${PORT} : http://localhost:${PORT}`);
    await connDB();
});
