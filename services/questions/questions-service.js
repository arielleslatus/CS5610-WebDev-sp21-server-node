//const questions = require("./questions");
const questionsDao = require("../../db/daos/questions-dao")

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
    return questionsDao.findAllQuestions();
};

const findQuestionsForQuiz = (qzid) => {
    return questionsDao.findQuestionsForQuiz(qzid)
};

const findQuestionById = (qid) => {
    return questionsDao.findQuestionById(qid);
};

const updateQuestion = () => {};

const deleteQuestion = () => {};

module.exports = {
    //createQuestion,
    //createQuestionForQuiz,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
    //updateQuestion,
    //deleteQuestion
};