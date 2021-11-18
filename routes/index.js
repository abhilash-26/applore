const express = require("express");

const router = express.Router();

router.use("/user", require("./userRoute"));

router.use("/blog", require("./blogRoute"));

module.exports = router;
