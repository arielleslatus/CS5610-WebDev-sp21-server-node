const quizAttemptsDao = require('../db/daos/quiz-attempts-dao')

module.exports = (app) => {
    const createAttempt = (req, res) => {
        const quizId = req.params.qid
        const attempt = req.body
        quizAttemptsDao.createAttempt(quizId, attempt)
            .then(attempt => res.send(attempt))
    };

    const findAttemptsForQuiz = (req, res) => {
        const quizId = req.params.qid
        quizAttemptsDao.findAttemptsForQuiz(quizId)
            .then(attempts => res.send(attempts))
    };



    app.post('/api/quizzes/:qid/attempts', createAttempt)
    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz)
};