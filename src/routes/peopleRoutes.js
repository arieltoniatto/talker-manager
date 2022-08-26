const express = require('express');
const { readJson, getById, writeFile } = require('../utils/readAndWriteFiles');

const route = express.Router();

route.get('/', async (req, res) => {
    const content = await readJson();
    res.status(200).json(content);
});

route.get('/:id', async (req, res) => {
        const { id } = req.params;
        const result = await getById(Number(id));
        if (result) {
        return res.status(200).json(result);
        }
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = route;