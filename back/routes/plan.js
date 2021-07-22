const express = require("express");

const { Plan, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const plan = await Plan.create({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      dateValue: req.body.dateValue,
      UserId: req.user.id,
    });
    res.status(200).json(plan);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
