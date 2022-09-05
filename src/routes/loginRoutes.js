const express = require('express');
const crypto = require('crypto');

// const { writeFile } = require('../utils/readAndWriteFiles');
const { insertEmailValidation,
    insertPasswordValidation } = require('../middlewares/fieldsValidadtion');
const { emailValidadtion,
    passwordValidation } = require('../middlewares/fieldContentValidation');

const route = express.Router();

route.post('/',
    insertEmailValidation, insertPasswordValidation, emailValidadtion, passwordValidation,
    async (req, res) => {
    // const userLogin = req.body;

    // const newUser = {
    //     ...userLogin,
    // };

    // await writeFile(newUser);

    const token = crypto.randomBytes(8).toString('hex');

    res.status(200).json({ token });
});

module.exports = route;