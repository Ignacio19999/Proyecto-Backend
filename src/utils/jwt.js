const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

exports.generateToken = (user) => {
    return jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
    return jwt.verify(token, secret);
};