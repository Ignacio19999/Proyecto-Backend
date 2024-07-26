const cartDao = require('../daos/cartDao');

class CartRepository {
    async getCartByUserId(userId) {
        return await cartDao.getCartByUserId(userId);
    }

    async addToCart(userId, productId) {
        return await cartDao.addToCart(userId, productId);
    }
}

module.exports = new CartRepository();