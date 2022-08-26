const express = require('express');

const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());

app.use('/talker', peopleRoutes);

module.exports = app;