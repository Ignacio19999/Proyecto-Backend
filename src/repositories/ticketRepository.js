const ticketDao = require('../daos/ticketDao');

class TicketRepository {
    async create(ticket) {
        return await ticketDao.create(ticket);
    }

    async getAll() {
        return await ticketDao.getAll();
    }

    async getById(id) {
        return await ticketDao.getById(id);
    }

    async update(id, ticket) {
        return await ticketDao.update(id, ticket);
    }

    async delete(id) {
        return await ticketDao.delete(id);
    }
}

module.exports = new TicketRepository();