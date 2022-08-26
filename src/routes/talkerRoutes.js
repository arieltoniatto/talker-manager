const express = require('express');
const { readJson, getById, writeFile, clearJson } = require('../utils/readAndWriteFiles');

const {
    insertNameValidation,
    insertAgeValidation,
    insertTalkValidation,
    insertWatchedAtValidation,
    insertRateValidation, 
} = require('../middlewares/fieldsValidadtion');

const { nameAndAgeValidation, talkValidation } = require('../middlewares/fieldContentValidation');

const isValidToken = require('../middlewares/tokenValidation');

const route = express.Router();

route.get('/', async (req, res) => {
    const content = await readJson();
    res.status(200).json(content);
});

route.post('/',
    isValidToken,
    insertNameValidation,
    insertAgeValidation,
    insertTalkValidation,
    insertWatchedAtValidation,
    insertRateValidation,
    nameAndAgeValidation,
    talkValidation,
    async (req, res) => {
        const talkerPost = req.body;
        talkerPost.id = 5;
        const newTalker = {
            ...talkerPost,
        };
        await clearJson();
        await writeFile(newTalker);

        console.log(talkerPost);
        res.status(201).json(talkerPost);
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