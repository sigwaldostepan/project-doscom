const prisma = require("../lib/prisma");
const jwt = require("jsonwebtoken");

const getPosts = async (req, res) => {
  try {
    const tags = req.query.tags;
    console.log(tags);
    const posts = tags
      ? await prisma.post.findMany({
          where: {
            tags,
          },
        })
      : await prisma.post.findMany();

    return res.status(200).json({
      payload: {
        status: "ok",
        response: posts,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);

    const post = await prisma.post.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        desc: true,
        img: true,
        tags: true,
        date: true,
        user: {
          select: {
            username: true,
          },
        },
      },
    });

    console.log(post);

    res.status(200).json({
      payload: {
        status: "ok",
        response: post,
      },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const editPost = (req, res) => {};

const deletePost = async (req, res) => {
  const id = req.params.id;

  await prisma.post.delete({
    where: { id },
  });

  return res.status(200).json({
    payload: {
      status: "ok",
      message: "Post deleted",
    },
  });
};

const createPost = async (req, res) => {
  const { title, desc, tags, img, date } = req.body;

  const response = await prisma.post.create({
    data: {
      title,
      desc,
      tags,
      img,
      date,
    },
  });

  return res.status(200).json({
    status: "ok",
    message: "post created",
  });
};

module.exports = {
  getPosts,
  getPostById,
  editPost,
  deletePost,
  createPost,
};
