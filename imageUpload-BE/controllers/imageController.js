const UploadModel = require("../models/uploadModel");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageCon = async (req, res) => {
  try {
    const imageUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "test",
    });

    const dbUpdate = await UploadModel.create({
      image: {
        secure_url: imageUpload.secure_url,
        public_id: imageUpload.public_id,
      },
    });

    return res.status(201).json({ message: "Image Uploaded", dbUpdate });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  uploadImageCon,
};
