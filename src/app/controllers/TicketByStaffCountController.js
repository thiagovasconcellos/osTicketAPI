import sequelize, { Op } from 'sequelize';

import Ticket from '../models/Ticket';
import TicketStatus from '../models/TicketStatus';

class TicketPendent {
  async show(req, res) {
    const { id } = req.params;
    const response = await Ticket.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('ticket_id')), 'count'],
      ],
      where: {
        dept_id: { [Op.notIn]: [14] },
        staff_id: { [Op.eq]: id },
      },
      include: [
        {
          model: TicketStatus,
          as: 'TicketStatus',
          attributes: ['name'],
        },
      ],
      group: ['status_id'],
      order: ['status_id'],
    });
    return res.json(response);
  }
}

export default new TicketPendent();
