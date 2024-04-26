const prisma = require("../lib/prisma");

const findUser = async (username, email) => {
  const userExist = await prisma.user.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });

  return userExist;
};

const createUser = async (email, username, password) => {
  return await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });
};

module.exports = {
  findUser,
  createUser,
};
