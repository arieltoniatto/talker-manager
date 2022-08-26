const express = require('express');
const { readFile } = require('../utils/readAndWriteFiles');

const route = express.Router();

route.get('/', async (req, res) => {
    const content = await readFile();
    res.status(200).json(content);
});

module.exports = route;