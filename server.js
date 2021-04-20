const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard', {useNewUrlParser: true, useUnifiedTopology: true});

const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app);

require("./controllers/quizzes-controller")(app);
require("./controllers/questions-controller")(app);
require("./controllers/quiz-attempts-controller")(app);
require("./controllers/users-controller")(app);

//app.listen(process.env.PORT || 3001)


const uri = process.env.MONGODB_URI;