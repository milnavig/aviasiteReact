const ApiError = require('../error/APIError');
const bcrypt = require('bcrypt');
const {User, Basket} = require('../models/models');
const uuid = require('uuid');
const { validationResult } = require('express-validator');

class UserController {
    async registration(req, res, next) {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(ApiError.badRequest('Invalid data in the inputs'));
        }
        console.log(req.body)
        const {email, password, username, role} = req.body;
        if (!email || !password || !username) {
            next(ApiError.badRequest('Incorrect email or password'));
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('There is such user'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const activationLink = uuid.v4();
        const user = await User.create({email, role, username, password: hashPassword, activationLink});
        const basket = await Basket.create({userId: user.id});

        //await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        //const token = generate_gwt(user.id, user.email, user.username, user.role);
        //const access_token = token.access_token;
        //const refresh_token = token.refresh_token;
        //await saveToken(user.id, refresh_token);
        //res.cookie('refreshToken', refresh_token, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

        return res.json(user);
        
        //return res.redirect(process.env.CLIENT_URL + '/login');
    }

    login(req, res, next) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'You are successfully logged in!'});
    }

    async logout(req, res, next) { 
        try {
            const { refreshToken } = req.cookies;
            const token = Token.destroy({
                where: {
                    refreshToken
                }
            });
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();