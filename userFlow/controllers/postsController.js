const PostModel = require("../models/postsModel");
const cloudinary = require("cloudinary").v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createPost = async (req, res) => {
  try {
    console.log(req.file.path);

    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: "Text is mandatory" });
    }

    if (req.file.path) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "userFlow",
      });

      fs.unlinkSync(req.file.path);
      
      const post = await PostModel.create({
        text,
        author: req.user.id,
        image: { url: result.secure_url, public_id: result.public_id },
      });
      if (!post) {
        return res.status(400).json({ message: "Error while creating post" });
      }

      return res.status(201).json({ message: "Post created", post });
    }

    const post = await PostModel.create({ text, author: req.user.id });
    if (!post) {
      return res.status(400).json({ message: "Error while creating post" });
    }

    return res.status(201).json({ message: "Post created", post });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: "Id is mandatory" });
    }

    const post = await PostModel.findByIdAndDelete(id);
    if (!post) {
      return res.status(400).json({ message: "Post not found" });
    }

    return res.status(201).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createPost,
  deletePost,
};
