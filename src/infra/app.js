const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const taskController = require('../controller/task-controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../public')));

app.use('/tasks', taskController);

module.exports = app;
