const questionsService = require("../services/questions/questions-service")

module.exports = (app) => {
    // Assignment 7:
    // const findAllQuestions = (req, res) => {
    //     const allQuestions = questionsService.findAllQuestions();
    //     res.send(allQuestions);
    // };
    //
    // const findQuestionsForQuiz = (req, res) => {
    //     const quizId = req.params['qid'];
    //     const questions = questionsService.findQuestionsForQuiz(quizId);
    //     res.send(questions);
    // };

    // Assignment 8:
    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then((questions) => res.json(questions))
    };

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qid; // quiz Id
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => res.json(questions))

    };
    const findQuestionById = (req, res) => {
        const questionId = req.params.questId;
        questionsService.findQuestionById(questionId)
            .then(question => res.json(question));
    };

    app.get("/api/quizzes/:qid/questions/:questId", findQuestionById);
    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
};