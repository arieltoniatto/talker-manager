const isValidToken = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(token);

    if (!token) {
        next(res.status(401).json({ message: 'Token não encontrado' }));
    }
    if (token.length < 16) {
        next(res.status(401).json({ message: 'Token inválido' }));
    }
    next();
};

module.exports = isValidToken;