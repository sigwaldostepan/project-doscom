const prisma = require("../lib/prisma");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const userExist = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (userExist)
      return res.status(409).json({
        data: {
          status: "error",
          message: "User already exist",
        },
      });

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hash, // Store the hashed password
      },
    });

    return res.status(200).json({
      data: {
        status: "ok",
        message: "User created",
        user, // Include the created user data
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      data: {
        status: "error",
        message: "Internal server error",
      },
    });
  }
};

const login = async (req, res) => {
  const { email, username, password } = req.body;

  // check user by username
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (!user)
    return res.status(404).json({
      data: {
        status: error,
        message: "User not found",
      },
    });

  // check password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect)
    return res.status(400).json({
      data: {
        status: "error",
        message: "Incorrect password",
      },
    });
};

const logout = (req, res) => {};

module.exports = {
  register,
  login,
  logout,
};
