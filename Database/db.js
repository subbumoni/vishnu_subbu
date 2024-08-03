const mongoose = require('mongoose')
const DB_URI = process.env.DB_URL + process.env.DB_NAME;

mongoose.connect(DB_URI).then((response) => {
    console.log('DATABASE CONNECTION SUCCESSFULL')
}).catch((error) => {
    console.log(error);
})












