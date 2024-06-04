import express from 'express';

import { default as imageRouter } from './image.routes.js';

const router = express.Router();

router.use('/image', imageRouter);

export default router;
