import express from 'express';
import {
    uploadImage,
    getImage
} from '../../controllers/image.controllers.js';
import upload from '../../middlewares/multer.middleware.js';

const router = express.Router();

router.route('/upload').post(upload.single("image"), uploadImage);
router.route('/get/:code').get(getImage);

export default router;

