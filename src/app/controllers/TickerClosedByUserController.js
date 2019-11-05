import Ticket from '../models/Ticket';

class TicketController {
  async show(req, res) {
    const response = await Ticket.findAll();
    return res.json(response);
  }
}

export default new TicketController();
