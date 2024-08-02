const mongoose = require("mongoose");

// Create quiz schema
const Quizschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true,
    },
    testDuration: {
        type: Number,
        required: true,
    },
});

const QuizModel = mongoose.model("quizes", Quizschema)

module.exports=QuizModel