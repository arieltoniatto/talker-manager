const express = require('express');

const peopleRoutes = require('./routes/peopleRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(express.json());

app.use('/talker', peopleRoutes);

app.use('/login', loginRoutes);

module.exports = app;