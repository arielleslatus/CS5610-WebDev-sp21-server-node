const express = require('express')
const app = express()

const demos = require('./controllers/demo-controller');
demos(app);

require("./controllers/quizzes-controller")(app);
require("./controllers/questions-controller")(app);

app.listen(3001);