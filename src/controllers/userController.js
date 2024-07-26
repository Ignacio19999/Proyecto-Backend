const User = require('../models/user.model');
const { hashPassword } = require('../utils/hashing');

exports.register = async (req, res) => {
    try {
        const hashedPassword = await hashPassword(req.body.password);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.redirect('/login');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = (req, res) => {
    res.redirect('/profile');
};

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};