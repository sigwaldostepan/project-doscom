const express = require("express");
const authRoutes = require("./routes/auth.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 7000;

app.use(cors());

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
