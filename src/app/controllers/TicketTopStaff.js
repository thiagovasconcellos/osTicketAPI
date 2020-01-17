import sequelize, { Op } from 'sequelize';
import { endOfDay, startOfMonth } from 'date-fns';

import Ticket from '../models/Ticket';
import Staff from '../models/Staff';

class TicketTopStaff {
  async show(req, res) {
    const today = endOfDay(Date.now());
    const start = startOfMonth(Date.now());
    const response = await Ticket.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('ticket_id')), 'count'],
      ],
      include: [
        {
          model: Staff,
          attributes: ['firstname', 'lastname'],
        },
      ],
      where: {
        closed: { [Op.gte]: start, [Op.lte]: today },
      },
      group: ['Staff.lastname'],
      order: [[sequelize.literal('count'), 'DESC']],
      limit: 10,
    });
    return res.json(response);
  }
}

export default new TicketTopStaff();
