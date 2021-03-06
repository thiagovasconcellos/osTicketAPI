import sequelize, { Op } from 'sequelize';
import { startOfMonth, endOfDay } from 'date-fns';

import Ticket from '../models/Ticket';
import Staff from '../models/Staff';

class TicketTop3Staff {
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
      limit: 3,
    });
    return res.json(response);
  }
}

export default new TicketTop3Staff();
