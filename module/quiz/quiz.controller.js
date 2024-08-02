const QuizRouter = require('express').Router();


// Importing models
const QuizModel=require("./Quiz.model.js")

QuizRouter.get("/", (req, res, next) => {
  QuizModel.find()
    .then((response) => {
      res.status(200).json({
        message: "Quize Fetched Successfully",
        length: response.length,
        page: 1,
        data: response,
      });
    })
    .catch((error) => console.log(error));
});

QuizRouter.post("/create", async (req, res, next) => {
  //     try {

  //         const Quiz = QuizModel(req.body);
  //         const response=await Quiz.save();
  //         if (response.id) {
  //             return res.status(201).json({
  //                 message: "Quiz created",
  //                 date:response,
  //            })
  //        }
  //     } catch(error) {
  //         return res.status(400).json({
  //             error:error.message,
  //             message:"Something went wrong",
  //      })
  //    }
  const Quiz = new QuizModel(req.body);
  Quiz.save()
    .then((response) => {
      if (response._id) {
        return res.status(201).json({
          message: "Quiz created successfull",
          date: express.response,
        });
      } else {
        return res.status(500).json({
          message: "Quiz created failed",
        });
      }
    })
    .catch((error) => {
      if (error) {
        return res
          .status(400)
          .json({ error: error.message, message: "something went wrong" });
      }
    });
});

module.exports = QuizRouter;
