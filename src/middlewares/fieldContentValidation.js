const emailValidadtion = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        const errorMsg = { message: 'O "email" deve ter o formato "email@email.com"' };
        return next(res.status(400).json(errorMsg));
    }
    next();
};

const passwordValidation = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 5) {
        const errorMsg = { message: 'O "password" deve ter pelo menos 6 caracteres' };
        return next(res.status(400).json(errorMsg));
    }
    next();
};

const nameAndAgeValidation = (req, res, next) => {
    const { name, age } = req.body;

    if (name.length < 3) {
        next(res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }));
    }
    if (age < 18) {
        next(res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' }));
    }
    next();
};

const talkValidation = (req, res, next) => {
    const { talk } = req.body;
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    if (!dateRegex.test(talk.watchedAt)) {
        next(res.status(400)
            .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' }));
    }
    if (!Number.isInteger(talk.rate) || talk.rate < 1 || talk.rate > 5) {
        next(res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }));
    }
    next();
};

module.exports = {
    emailValidadtion,
    passwordValidation,
    nameAndAgeValidation,
    talkValidation,
};