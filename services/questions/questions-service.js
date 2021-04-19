//const questions = require("./questions");
const questionsModel = require("../../db/models/questions/questions-model")

const createQuestion = () => {};

const createQuestionForQuiz = () => {};

// Assignment 7:
// const findAllQuestions = () => {
//     return questions;
// };

// const findQuestionsForQuiz = (quizId) => {
//     return questions.filter((question) => {
//         return (question.quizId === quizId);
//     });
// };
//
// const findQuestionById = (questId) => {
//     return questions.find((question) => {
//         return (question._id === questId);
//     });
// };

// Assignment 8:
const findAllQuestions = () => {
    return questionsModel.find();
};

const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})
};

const findQuestionById = (questId) => {
    return questionsModel.findById(questId);
};

const updateQuestion = () => {};

const deleteQuestion = () => {};

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
};