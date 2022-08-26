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

module.exports = {
    emailValidadtion,
    passwordValidation,
};