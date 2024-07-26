const productDao = require('../daos/productDao');

class ProductRepository {
    async getAll() {
        return await productDao.getAll();
    }

    async getById(id) {
        return await productDao.getById(id);
    }

    async create(product) {
        return await productDao.create(product);
    }

    async update(id, product) {
        return await productDao.update(id, product);
    }

    async delete(id) {
        return await productDao.delete(id);
    }
}

module.exports = new ProductRepository();