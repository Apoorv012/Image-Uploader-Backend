import express from 'express';
import router from './routes/index.routes.js';
import dotenv from 'dotenv';
import { connDB } from './config/db.config.js';
import cors from 'cors';
import { codeExistsInDatabase } from './utils/code_generation.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Hello World');
    console.log("get", "Hello World");
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT} : http://localhost:${PORT}`);
    connDB();
});
