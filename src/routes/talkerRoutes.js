const express = require('express');
const {
    readJson,
    getById,
    writeFile,
    clearJson,
    changeTalker,
    removeTalker,
    searchByTerms,
} = require('../utils/readAndWriteFiles');

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

route.get('/search', isValidToken, async (req, res) => {
    const term = req.params;
    const result = await searchByTerms(term);
    if (!term) {
        const content = await readJson();
        return res.status(200).json(content);
    }
    if (!result) {
        return res.status(200).json([]);
    }
    // console.log(result);
    res.status(200).end();
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
        const content = await readJson();
        const newId = content.length;
        talkerPost.id = newId;
        const newTalker = {
            ...talkerPost,
        };
        await clearJson();
        await writeFile(newTalker);

        // console.log(talkerPost);
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

route.put('/:id',
    isValidToken,
    insertNameValidation,
    insertAgeValidation,
    insertTalkValidation,
    insertWatchedAtValidation,
    insertRateValidation,
    nameAndAgeValidation,
    talkValidation,
    async (req, res) => {
        const { id } = req.params;
        const editedTalker = req.body;

        const result = await changeTalker(editedTalker, Number(id));

        return res.status(200).json(result);
});

route.delete('/:id', isValidToken, async (req, res) => {
    const { id } = req.params;
    await removeTalker(Number(id));
    return res.status(204).end();
});

module.exports = route;