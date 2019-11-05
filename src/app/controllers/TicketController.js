import Ticket from '../models/Ticket';
import Department from '../models/Department';
import User from '../models/User';
import TicketStatus from '../models/TicketStatus';
import Topic from '../models/Topic';
import Team from '../models/Team';
import Staff from '../models/Staff';

class TicketController {
  async show(req, res) {
    const response = await Ticket.findAll({
      attributes: [
        'ticket_id',
        'number',
        'isoverdue',
        'isanswered',
        'created',
        'updated',
        'closed',
      ],
      include: [
        {
          model: Department,
          attributes: ['name'],
        },
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: TicketStatus,
          attributes: ['name'],
        },
        {
          model: Topic,
          attributes: ['topic'],
        },
        {
          model: Team,
          attributes: ['name'],
        },
        {
          model: Staff,
          attributes: ['username', 'firstname', 'lastname'],
        },
      ],
    });
    return res.json(response);
  }
}

export default new TicketController();
