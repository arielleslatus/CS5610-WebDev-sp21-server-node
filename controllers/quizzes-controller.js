const quizzesService = require("../services/quizzes/quizzes-service")

module.exports = (app) => {
    // Assignment 7:
    // const findAllQuizzes = (req, res) => {
    //     const quizzes = quizzesService.findAllQuizzes(); // synchronous
    //     res.send(quizzes);
    //     }
    // }

    // const findQuizById = (req, res) => {
    //     const quizId = req.params['qid'];
    //     const quiz = quizzesService.findQuizById(quizId);
    //     res.send(quiz);
    // }

    // Assignment 8:
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)) // asynchronous
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['qid'];
        quizzesService.findQuizById(quizId)
            .then(quiz => res.json(quiz))
    }

    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quizzes/:qid", findQuizById);

}