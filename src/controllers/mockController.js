const Mock = require('../models/mock');

exports.getAllMocks = async (req, res) => {
    try {
        const mocks = await Mock.find();
        res.json(mocks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};