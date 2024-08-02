const mongoose=require('mongoose')
const UserRouter = require('./user.controller')

const Userschema=mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        require:true,
    },
},{timestamps:true})

const UserModel = mongoose.model("user", Userschema)

module.exports = UserRouter;