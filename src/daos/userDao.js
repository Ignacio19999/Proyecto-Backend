const User = require('../models/user.model');

class UserDao {
    async getAll() {
        return await User.find();
    }

    async getById(id) {
        return await User.findById(id);
    }

    async create(user) {
        return await User.create(user);
    }

    async update(id, user) {
        return await User.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserDao();