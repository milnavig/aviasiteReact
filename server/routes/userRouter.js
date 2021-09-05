const Router = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');
const {body} = require('express-validator');

const router = new Router();

router.post('/registration', body('email').isEmail(), body('password').isLength({min: 3, max: 32}), userController.registration);
router.post('/login', passport.authenticate('local'), userController.login);

module.exports = router;