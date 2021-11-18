const express = require("express");
const {
  userLogin,
  userRegister,
  getAllAuthor,
} = require("../controllers/userController");
const router = express.Router();

router.post("/login", userLogin);

router.post("/register", userRegister);

router.post("/get-all-author", getAllAuthor);

module.exports = router;
