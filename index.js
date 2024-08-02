

const express = require("express");


const http_server = express();
const parser=require('body-parser')




// configure DOTENV
require("dotenv").config();

// Database configuration
require("./Database/db.js");

// configure body-parser
http_server.use(parser.json());

// Register All APi Routes
http_server.use('/api/quiz',require('./module/quiz/quiz.controller.js'))
http_server.use('/api/auth',require('./module/user/user.controller.js'))

const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

http_server.listen(PORT, HOSTNAME, () => {
  console.log(`server is running ${HOSTNAME}:${PORT}`);
});
http_server.get("/", (req, res) => {
  res.status(200).json({
    message: "Server started successfully",
  });
});

