const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin, Authorization');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

 MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require('mongoose'); mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true});

app.listen(process.env.PORT || 3001)

var cors = require('cors');
app.use(cors());


const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}));



const demos = require('./controllers/demo-controller');
demos(app);

require("./controllers/quizzes-controller")(app);
require("./controllers/questions-controller")(app);
require("./controllers/quiz-attempts-controller")(app);
require("./controllers/users-controller")(app);


