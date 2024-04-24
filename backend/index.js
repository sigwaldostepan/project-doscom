const express = require("express");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/auth.js");
const postsRoutes = require("./routes/posts.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Connected");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
