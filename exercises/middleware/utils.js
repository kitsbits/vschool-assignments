const explosion = (req, res, next) => {
    req.explosion = "BOOOOM!!!";
    next();
}

module.exports = {
    explosion
}
