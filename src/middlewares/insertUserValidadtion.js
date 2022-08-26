const insertUserValidation = (req, res, next) => {
    const newUser = req.body;
    const requiredProperties = ['email', 'password'];
    const hasProperties = requiredProperties.every((property) => property in newUser);

    if (!hasProperties) {
        const fieldError = { message: 'O campo "email" é obrigatório' };
        return next(fieldError);
    }

    next();
};

module.exports = insertUserValidation;