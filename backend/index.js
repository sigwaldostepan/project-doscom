const express = require("express");
const authRoutes = require("./routes/auth.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 7000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("connected");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
