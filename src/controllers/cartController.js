const cartService = require('../services/cartService');

exports.getCart = async (req, res) => {
    try {
        const cart = await cartService.getCartByUserId(req.user.id);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addToCart = async (req, res) => {
    try {
        const cart = await cartService.addToCart(req.user.id, req.body.productId);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};