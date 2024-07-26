const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', mainController.index);
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));
router.get('/profile', authMiddleware.isAuthenticated, (req, res) => res.render('profile', { user: req.user }));

module.exports = router;