const quizzes = require("./quizzes");

const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = () => {};

// Assignment 7:
// const findAllQuizzes = () => {
//     return quizzes;
// };
//
// const findQuizById = (qid) => {
//     return quizzes.find((quiz) => {
//         return (quiz._id === qid);
//     });
// };


// Assignment 8:
const findAllQuizzes = () => {
    return quizzesModel.find()
}

const findQuizById = (qid) => {
    return quizzesModel
        .findById(qid)
        .populate("questions")
        .exec()
}

const updateQuiz = () => {};

const deleteQuiz = () => {};

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
};