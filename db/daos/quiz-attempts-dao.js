const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    for (let i = 0; i < questions.length; i++) {
        if(questions[i].answer === questions[i].correct) {
            numberOfCorrectQuestions++
        }
    }
    let scoreToReturn = 100 * numberOfCorrectQuestions / questions.length
    return scoreToReturn;
};

const findAttemptsForQuiz = (qid) => {
    return quizAttemptsModel.find({quiz: qid}).populate('quiz', 'title _id') //typo?
};

const createAttempt = (qid, attempt) => {
    return quizAttemptsModel.create({quiz: qid, answers: attempt, score: scoreQuiz(attempt)})
};

module.exports = {
    createAttempt,
    findAttemptsForQuiz
}