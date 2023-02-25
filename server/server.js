const { json } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db.js");
const user = require("./routes/userRoutes.js");

const app = express(json());
const PORT = process.env.PORT;

connectDB();

app.use("/api/user", user);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
