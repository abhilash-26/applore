const userSchema = require("../models/userModel");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
  console.log("working");
  console.log(req.body);
  try {
    const { name, email, password, role, phoneNumber } = req.body;
    const savedemail = await userSchema.findOne({
      email: email,
    });
    if (savedemail) {
      return res.send({ status: 1, message: "email is already in use" });
    }

    //hash the password using bcryptjs library
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const createdUser = await userSchema.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: hashPassword,
      role: role,
    });
    res.send({
      user: createdUser,
      status: 0,
      msg: "User registered successfully",
    });
  } catch (error) {
    res.send({
      status: 1,
      msg: error,
      data: null,
    });
    console.log(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (!user) return res.send({ message: "email is incorrect" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.send({ message: "invalid password" });

    res.send({
      status: 0,
      user: user,
      msg: "logged in",
    });
  } catch (error) {
    res.send({
      status: 1,
      msg: error,
      data: null,
    });
  }
};

const getAllAuthor = async (req, res) => {
  try {
    const allUser = await userSchema.find({
      role: "C",
    });
    res.send({
      allUser,
      msg: "all user are",
      status: 0,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userRegister,
  userLogin,
  getAllAuthor,
};
