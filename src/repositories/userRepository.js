const userDao = require('../daos/userDao');

class UserRepository {
    async getAll() {
        return await userDao.getAll();
    }

    async getById(id) {
        return await userDao.getById(id);
    }

    async create(user) {
        return await userDao.create(user);
    }

    async update(id, user) {
        return await userDao.update(id, user);
    }

    async delete(id) {
        return await userDao.delete(id);
    }
}

module.exports = new UserRepository();