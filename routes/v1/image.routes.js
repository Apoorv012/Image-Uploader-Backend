import express from 'express';
import {
    uploadImage
} from '../../controllers/image.controllers.js';
import upload from '../../middlewares/multer.middleware.js';

const router = express.Router();

router.route('/upload').post(upload.single("image"), uploadImage);

export default router;

