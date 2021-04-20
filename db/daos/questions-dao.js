const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => {
    return questionsModel.find()
};

const findQuestionById = (qid) => {
    return questionsModel.findById(qid)
};

const findQuestionsForQuiz = (qzid) => {
    return quizzesModel.findById(qzid)
        .populate('questions')
        .then(quiz => quiz.questions)
};

// const getCorrectAnswer = (qid) => {
//     reutrn questionsModel.findOne({answer})
// }

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
};