const quizzesDao = require("../../db/daos/quizzes-dao")

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
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (qid) => {
    return quizzesDao
        .findQuizById(qid)
        .populate("questions")
        .exec()
}

const updateQuiz = () => {};

const deleteQuiz = () => {};

module.exports = {
    //createQuiz,
    findAllQuizzes,
    findQuizById
    //updateQuiz,
    //deleteQuiz
};