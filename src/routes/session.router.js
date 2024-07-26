const express = require('express');
const router = express.Router();
const authController = require('../controllers/');

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/github', authController.githubLogin);
router.get('/github/callback', authController.githubCallback);

module.exports = router;