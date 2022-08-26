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

module.exports = { insertEmailValidation, insertPasswordValidation };