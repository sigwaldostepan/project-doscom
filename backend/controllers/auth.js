const prisma = require("../lib/prisma");
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUser, createUser } = require("./users");

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const userExist = await findUser(username, email);

    console.log(userExist);

    if (userExist)
      return res.status(409).json({
        payload: {
          status: "error",
          message: "User already exist",
        },
      });

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create user
    const user = await createUser(email, username, hash);

    return res.status(200).json({
      payload: {
        status: "ok",
        message: "User created",
        user,
      },
    });
  } catch (error) {
    console.log("Error creating user:", error);
    return res.status(500).json({
      payload: {
        status: "error",
        message: "Internal server error",
      },
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  // check user by username
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  // if user not found return user not found response
  if (!user)
    return res.status(404).json({
      payload: {
        status: "error",
        message: "User not found",
      },
    });

  // check password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect)
    return res.status(400).json({
      payload: {
        status: "error",
        message: "Incorrect password",
      },
    });

  const token = jwt.sign(user.id, "jwtkey");

  res.cookie("accessToken", {
    httpOnly: true,
    accessToken: token,
  });

  return res.status(200).send({
    payload: {
      status: "ok",
      message: "Login success",
      user: {
        email: user.email,
        username: user.username,
      },
    },
  });
};

const logout = (req, res) => {
  return res
    .clearCookie("accessToken")
    .status(200)
    .json({
      payload: {
        status: "ok",
        message: "User logged out",
      },
    });
};

module.exports = {
  register,
  login,
  logout,
};
