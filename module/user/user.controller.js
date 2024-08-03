const UserRouter = require("express").Router();

const UserModel = require("./user.model");

UserRouter.post("/create", async (req, res) => {
  const User = new UserModel(req.body);
  await User.save()
    .then((response) => {
      if (response && response._id) {
        return res.status(201).json({
          message: "User creation successfully",
          data: response,
        });
      } else {
        return res.status(500).json({
          message: "User creation failed",
          data: response,
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        error: error.message,
        message: "something went wrong",
      });
    });
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is invalid",
    });
  }
  if (!password) {
    return res.status(400).json({
      message: "password is invalid",
    });
  }
  const matchingUser = await UserModel.findOne({ email });

  if (!matchingUser) {
    return res.status(404).json({
      message: "No User Found",
    });
  }
  if (matchingUser.password === password) {
    return res.status(200).json({
      message: "Login successful",
    });
  } else {
      return res.status(200).json({
        error:"Wrong Credentials",
      message: "Login Failed",
    });
  }
});



module.exports = UserRouter;
