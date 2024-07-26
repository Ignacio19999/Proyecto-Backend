const Ticket = require('../models/ticketModel');

class TicketDao {
    async create(ticket) {
        return await Ticket.create(ticket);
    }

    async getAll() {
        return await Ticket.find();
    }

    async getById(id) {
        return await Ticket.findById(id);
    }

    async update(id, ticket) {
        return await Ticket.findByIdAndUpdate(id, ticket, { new: true });
    }

    async delete(id) {
        return await Ticket.findByIdAndDelete(id);
    }
}

module.exports = new TicketDao();