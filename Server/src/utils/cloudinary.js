import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // console.log ("File is uploaded successfully on cloudinary", response.url);
        fs.unlinkSync(localFilePath) // removes local temporary file after uploading successfully on cloudinary
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // It removes the locally saved temporary file as the upload operation got failed.
        return null;
    }
}

// const uploadonCloudinaryvideo = async (localFilePath) => {
//     try {

//         if (!localFilePath) return null
//         const response = await cloudinary.uploader.upload(localFilePath, { resource_type: 'video' }
//         )
    
//         fs.unlinkSync(localFilePath)
//     return null;
// } catch (error) {
//     fs.unlinkSync(localFilePath)
//     return null;
// }

// }
export { uploadOnCloudinary }