const insertEmailValidation = (req, res, next) => {
    const newUser = req.body;
    const requiredProperties = ['email'];
    const hasProperties = requiredProperties.every((property) => property in newUser);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "email" é obrigatório' };
        
        return next(res.status(400).json(fieldError));
    }

    next();
};

const insertPasswordValidation = (req, res, next) => {
    const newUser = req.body;
    const requiredProperties = ['password'];
    const hasProperties = requiredProperties.every((property) => property in newUser);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "password" é obrigatório' };
        
        return next(res.status(400).json(fieldError));
    }

    next();
};

const insertNameValidation = (req, res, next) => {
    const newTalker = req.body;
    const requiredProperties = ['name'];
    const hasProperties = requiredProperties.every((property) => property in newTalker);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "name" é obrigatório' };
        
        return next(res.status(400).json(fieldError));
    }

    next();
};

const insertAgeValidation = (req, res, next) => {
    const newTalker = req.body;
    const requiredProperties = ['age'];
    const hasProperties = requiredProperties.every((property) => property in newTalker);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "age" é obrigatório' };
        
        return next(res.status(400).json(fieldError));
    }

    next();
};

const insertTalkValidation = (req, res, next) => {
    const newTalker = req.body;
    const requiredProperties = ['talk'];
    const hasProperties = requiredProperties.every((property) => property in newTalker);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "talk" é obrigatório' };
        
        return next(res.status(400).json(fieldError));
    }

    next();
};

const insertWatchedAtValidation = (req, res, next) => {
    const newTalker = req.body;
    const requiredProperties = ['watchedAt'];
    const hasProperties = requiredProperties.every((property) => property in newTalker.talk);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "watchedAt" é obrigatório' };
        
        return next(res.status(400).json(fieldError));
    }

    next();
};

const insertRateValidation = (req, res, next) => {
    const newTalker = req.body;
    const requiredProperties = ['rate'];
    const hasProperties = requiredProperties.every((property) => property in newTalker.talk);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "rate" é obrigatório' };
        
        return next(res.status(400).json(fieldError));
    }

    next();
};

module.exports = { 
    insertEmailValidation,
    insertPasswordValidation,
    insertNameValidation,
    insertAgeValidation,
    insertTalkValidation,
    insertWatchedAtValidation,
    insertRateValidation, 
};