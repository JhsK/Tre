const express = require("express");
const { Post, User, Image } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log(req.user);
    const posts = await Post.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
      ],
    });
    console.log("!!!!!!!", req.user);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
