const { json } = require('body-parser');
const express = require('express');

const http_server = express()



// configure DOTENV
require("dotenv").config();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;


http_server.listen(PORT,HOSTNAME, ()=> {
    console.log(`server is running ${HOSTNAME}:${PORT}`)
})
http_server.get('/', (req, res) => {
    res.status(200).json({
        message:"Server started successfully"
    })
})