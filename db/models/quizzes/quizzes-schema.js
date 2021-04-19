const mongoose = require("mongoose")
const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    courseId: String,
    questions: [{
        type: String, //mongoose.Schema.Types.ObjectId,
        ref: 'QuestionsModel'
    }]
}, {collection: "quizzes"})

module.exports = quizzesSchema