import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImageToCloudinary = async (localFilePath) => {
    try {
        console.log(process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET);
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "image"
        });

        console.log(`uploaded ${localFilePath} to ${response.secure_url}`)

        return response;
    }
    catch (err) {
        console.error(err);
        fs.unlinkSync(localFilePath);
    }
}

export {uploadImageToCloudinary};