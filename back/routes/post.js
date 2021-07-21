const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Post, Image, User } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 존재하지 않으므로 생성합니다");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + "_" + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20mb
});

router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      rate: req.body.rate,
      UserId: req.user.id,
    });
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: User,
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  try {
    const deletePost = await Post.findOne({
      where: { id: req.params.postId },
    });
    await deletePost.destroy();
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post(
  "/images",
  isLoggedIn,
  upload.array("image"),
  async (req, res, next) => {
    try {
      console.log(req.files);
      res.json(req.files.map((v) => v.filename));
    } catch (error) {
      console.error(error);
    }
  }
);

module.exports = router;
