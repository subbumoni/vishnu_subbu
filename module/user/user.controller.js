const UserRouter = require('express').Router();
const UserModel=require('./user.model')

UserRouter.post("/create", (req, res) => {

    const User = new UserModel(req.body); 
        console.log(User);
})

module.exports = UserRouter;