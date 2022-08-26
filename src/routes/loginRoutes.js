const express = require('express');
const crypto = require('crypto');

const { writeFile } = require('../utils/readAndWriteFiles');
const { insertEmailValidation,
    insertPasswordValidation } = require('../middlewares/insertUserValidadtion');
const { emailValidadtion, passwordValidation } = require('../middlewares/userFieldsValidation');

const route = express.Router();

route.post('/',
    insertEmailValidation, insertPasswordValidation, emailValidadtion, passwordValidation,
    async (req, res) => {
    const userLogin = req.body;

    const newUser = {
        ...userLogin,
    };

    await writeFile(newUser);

    const token = crypto.randomBytes(256).toString().substring(0, 16);

    res.status(200).json({ token });
});

module.exports = route;