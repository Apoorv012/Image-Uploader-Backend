import express from 'express';
import {
    uploadImage
} from '../../controllers/image.controllers.js';

const router = express.Router();

router.route('/upload').post(uploadImage);

export default router;

