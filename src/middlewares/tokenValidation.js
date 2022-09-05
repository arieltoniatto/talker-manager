const isValidToken = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log(token.length);
    if (!authorization) {
        next(res.status(401).json({ message: 'Token não encontrado' }));
    }
    if (authorization.length !== 16) {
        next(res.status(401).json({ message: 'Token inválido' }));
    }
    next();
};

module.exports = isValidToken;