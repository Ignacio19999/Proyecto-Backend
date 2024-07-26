const Cart = require('../models/cart');

class CartDao {
    async getCartByUserId(userId) {
        return await Cart.findOne({ userId });
    }

    async addToCart(userId, productId) {
        const cart = await Cart.findOne({ userId });
        if (cart) {
            cart.products.push(productId);
            await cart.save();
            return cart;
        } else {
            return await Cart.create({ userId, products: [productId] });
        }
    }
}

module.exports = new CartDao();