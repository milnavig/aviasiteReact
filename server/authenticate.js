let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
const models = require('./models/models');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(function(username, password, done) {
    models.User.findOne({where: { username }}).then(function(user) {
        console.log(user);
        user = user.dataValues;
        
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        
        return done(null, {id: user.id, email: user.email, role: user.role, username: user.username});
        }).catch((err) => {
            console.log(err);
            done(null, false, { message: 'Something went wrong trying to authenticate' });
        });
        
    }
));

/*
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
*/

passport.serializeUser(function(user, done) {
    done(null, {id: user.id, email: user.email, username: user.username, role: user.role});
});

passport.deserializeUser(function(user, done) {
    done(null, {id: user.id, email: user.email, username: user.username, role: user.role});
});