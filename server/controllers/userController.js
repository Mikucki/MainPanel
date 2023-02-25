const User = require("../models/userModel.js");
const asyncHendler = require("express-async-handler");

const registerUser = asyncHendler(async (req, res) => {
  res.json({
    message: "SIEMKA SIEMKA",
  });
});

module.exports = registerUser;
