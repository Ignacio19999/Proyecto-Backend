const ticketRepository = require('../repositories/ticketRepository');

class TicketService {
    async createTicket(ticket) {
        return await ticketRepository.create(ticket);
    }

    async getAllTickets() {
        return await ticketRepository.getAll();
    }

    async getTicketById(id) {
        return await ticketRepository.getById(id);
    }

    async updateTicket(id, ticket) {
        return await ticketRepository.update(id, ticket);
    }

    async deleteTicket(id) {
        return await ticketRepository.delete(id);
    }
}

module.exports = new TicketService();