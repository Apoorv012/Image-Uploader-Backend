// import prisma from '../config/db.config.js';
// import {
//     response_200,
//     response_500
// } from '../utils/responseCodes.js';

async function uploadImage (req,res) {
    try {
        

        // response_200(res, 'Result added successfully', newResult);

        // response 200
        res.status(200).json({
            message: 'Image uploaded successfully',
        });
    }
    catch(error)
    {
        console.error(`Error creating results: ${error}`);
        // response_500(res, 'Error creating result:', error);
        res.status(500).json({
            message: 'Error uploading image',
            error: error
        });

    }
}

export { uploadImage };