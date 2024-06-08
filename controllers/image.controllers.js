// import {
//     response_200,
//     response_500
// } from '../utils/responseCodes.js';
import { uploadImageToCloudinary } from "../utils/cloudinary.js";
import client from "../config/db.config.js"
import { getUniqueCodeFromMongoDB } from "../utils/code_generation.js";

async function uploadImage (req,res) {
    try {
        console.log("post", "uploadImage");
        console.log("filepath", req.file.originalname);

        const localFilePath = req.file.path;
        const cloudinaryURL = await uploadImageToCloudinary(localFilePath);

        console.log("cloudinaryURL", cloudinaryURL.secure_url);
        const code = await getUniqueCodeFromMongoDB();

        const db = client.db("uploads");
        const collection = db.collection("images");

        const rec = await collection.insertOne({
            code: code,
            url: cloudinaryURL.secure_url
        });

        console.log("rec", rec);

        // response 200
        res.status(200).json({
            message: 'Image uploaded successfully',
            url: cloudinaryURL.secure_url,
            code
        });
    }
    catch(error)
    {
        console.error(`Error uploading image: ${error}`);
        // response_500(res, 'Error creating result:', error);
        res.status(500).json({
            message: 'Error uploading image',
            error: error
        });

    }
}

export { uploadImage };