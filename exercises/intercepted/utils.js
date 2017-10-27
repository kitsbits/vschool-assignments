const boo = (req, res, next) => {
    req.boo = res.send("What up, boo?");
};

module.exports = {
    boo
}
