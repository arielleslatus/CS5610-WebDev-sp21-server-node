const questionsService = require("../services/questions-service")

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid'];
        const questions = questionsService.findQuestionsForQuiz(quizId);
        res.send(questions);
    }
    const findQuestionById = (req, res) => {
        const questionId = req.params['questId'];
        const question = questionsService.findQuestionById(questionId);
        res.send(question);
    }

    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.get("/api/quizzes/:qid/questions/:questId", findQuestionById);

}