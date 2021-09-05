let error = require('../error/APIError');

module.exports = function auth(req, res, next) {
    console.log(req.user);

    if (!req.user) {
        let err = error.forbidden('You are not authenticated!');
        next(err);
    }
    else {
        next();
    }
}