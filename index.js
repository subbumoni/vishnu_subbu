const { json } = require('body-parser');
const express = require('express');

const http_server = express()

const PORT = 4000
const HOSTNAME = 'localhost'

http_server.listen(PORT,HOSTNAME, ()=> {
    console.log(`server is running ${HOSTNAME}:${PORT}`)
})
http_server.get('/', (req, res) => {
    res.status(200).json({
        message:"Server started successfully"
    })
})