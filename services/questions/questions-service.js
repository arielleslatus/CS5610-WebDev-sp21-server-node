const questions = require("./questions");

const createQuestion = () => {};

const createQuestionForQuiz = () => {};

const findAllQuestions = () => {
    return questions;
};

const findQuestionsForQuiz = (quizId) => {
    return questions.filter((question) => {
        return (question.quizId === quizId);
    });
};

const findQuestionById = (questId) => {
    return questions.find((question) => {
        return (question._id === questId);
    });
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