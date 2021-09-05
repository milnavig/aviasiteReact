const ApiError = require('../error/APIError');

module.exports = function(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message});
    }
    console.log(err);
    return res.status(500).json({message: "Unknown error!"});
}