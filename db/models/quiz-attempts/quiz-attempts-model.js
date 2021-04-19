const mongoose = require('mongoose')

const quizAttemptsSchema = require('./quiz-attempts-schema')

const quizAttemptsModel = mongoose.model(
    'QuizAttemptsModel',
    quizAttemptsSchema
)

module.exports = quizAttemptsModel;