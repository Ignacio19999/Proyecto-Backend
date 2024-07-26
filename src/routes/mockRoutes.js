const express = require('express');
const router = express.Router();
const mockController = require('../controllers/mockController');

router.get('/', mockController.getAllMocks);

module.exports = router;