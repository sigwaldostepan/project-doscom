const prisma = require("../lib/prisma");

const getPosts = async (req, res) => {
  try {
    const tags = req.query.tags;

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
    res.json(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;

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

    res.status(200).json({
      payload: {
        status: "ok",
        response: post,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createPost = async (req, res) => {
  const { title, desc, tags, img, date, username } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });

  await prisma.post.create({
    data: {
      title,
      desc,
      tags,
      img,
      date,
      userId: user.id,
    },
  });

  return res.status(200).json({
    payload: {
      status: "ok",
      message: "post created",
    },
  });
};

const editPost = async (req, res) => {
  try {
    const { title, desc, tags, img, username } = req.body;
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });

    await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        desc,
        tags,
        img,
        userId: user.id,
      },
    });

    return res.status(200).json({
      payload: {
        status: "ok",
        message: "post created",
      },
    });
  } catch (error) {
    res.json(error);
  }
};

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

module.exports = {
  getPosts,
  getPostById,
  editPost,
  deletePost,
  createPost,
};
