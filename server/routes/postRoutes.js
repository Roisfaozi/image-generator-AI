import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import express from 'express';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET ALL POSTS
router.route('/').get(async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).res.json({
      success: true,
      message: error,
    });
  }
});
// GET A POSTS
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    console.log(photoUrl);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    console.log(newPost);
    res.status(200).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Unable to create a post, please try again',
    });
  }
});

export default router;
