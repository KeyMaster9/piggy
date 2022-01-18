const string = require("string-sanitizer");

module.exports = (req, res, next) => {
    const foreName = req.body.foreName;
    string.sanitize(foreName);
    req.body.foreName = foreName;
    next();
}