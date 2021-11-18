const Blogs = require("../models/blogs");

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content) {
      res.send({
        msg: "title or content can't be empty",
        status: 1,
      });
    }
    const result = await Blogs.create({
      author,
      title,
      content,
    });
    res.send({
      msg: "created succesfully",
      status: 0,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllBlog = async (req, res) => {
  try {
    const { author } = req.body;
    // console.log(author);
    // if (author != "") {
    //   res.send({
    //     msg: "Invalid author",
    //     status: 1,
    //   });
    // }
    const allblog = await Blogs.find({
      author: author,
    });
    res.send({
      msg: "All blog are",
      status: 0,
      blog: allblog,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllApprovedBlog = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(req.body);
    const result = await Blogs.find({
      author: userId,
      approved: "A",
    });

    if (result.length == 0) {
      res.send({ msg: "No approved blog", status: 1 });
    } else {
      res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
};

const approveBlog = async (req, res) => {
  try {
    const { Id } = req.body;
    console.log(Id);
    const result = await Blogs.findByIdAndUpdate(
      Id,
      {
        approved: "A",
      },
      { new: true }
    );
    console.log(result);
    res.send({
      msg: approved,
      status: 0,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createBlog, getAllBlog, getAllApprovedBlog, approveBlog };
