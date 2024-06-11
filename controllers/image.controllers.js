// import {
//     response_200,
//     response_500
// } from '../utils/responseCodes.js';
import { uploadImageToCloudinary } from "../utils/cloudinary.js";
import client from "../config/db.config.js"
import { getUniqueCodeFromMongoDB } from "../utils/code_generation.js";

async function uploadImage (req,res) {
    console.log("post", "uploadImage");

    const localFilePath = req.file.path;
    let cloudinaryURL;

    try {
        cloudinaryURL = await uploadImageToCloudinary(localFilePath);
    } catch (err) {
        console.error(`Error uploading image:`, err);
        res.status(400).json({
            message: 'Error uploading image',
            error: err.message
        });
        return;
    };

    console.log("cloudinaryURL", cloudinaryURL.secure_url);
    let code;
    
    try {
        code = await getUniqueCodeFromMongoDB();
    }
    catch(error) {
        console.error(`Error creating code:`, error);
        res.status(500).json({
            message: 'Error creating code',
            error: error.message
        });
        return;
    }

    try {
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
        console.error(`Error uploading image:`, error);
        // response_500(res, 'Error creating result:', error);
        res.status(500).json({
            message: 'Error uploading image',
            error: error.message
        });
    }
}

async function getImage (req,res) {
    try {
        console.log("get", "getImage");
        const code = req.params.code;

        const db = client.db("uploads");
        const collection = db.collection("images");

        const rec = await collection.findOne({ code: code });

        if (!rec) {
            // response 404
            res.status(404).json({
                message: 'Image not found'
            });
            return;
        }

        // response 200
        res.status(200).json({
            message: 'Image fetched successfully',
            url: rec.url
        });
    }
    catch(error)
    {
        console.error(`Error fetching image: ${error}`);
        // response_500(res, 'Error creating result:', error);
        res.status(500).json({
            message: 'Error fetching image',
            error: error
        });

    }
}

export { uploadImage, getImage };