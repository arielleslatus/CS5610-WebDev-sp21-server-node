const questions = require("./questions");

const createQuestion = () => {};

const findQuestionsForQuiz = (quizId) => {
    return questions.filter((question) => {
        return (question.quizId == quizId);
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
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
};