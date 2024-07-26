const passport = require('passport');

exports.login = passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
});

exports.githubLogin = passport.authenticate('github');

exports.githubCallback = passport.authenticate('github', {
    successRedirect: '/profile',
    failureRedirect: '/'
});

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};