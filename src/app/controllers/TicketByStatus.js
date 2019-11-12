import sequelize, { Op } from 'sequelize';

import Ticket from '../models/Ticket';
import TicketStatus from '../models/TicketStatus';

class TicketByStatus {
  async show(req, res) {
    const response = await Ticket.findAll({
      include: [
        {
          model: TicketStatus,
          required: true,
          attributes: ['name'],
        },
      ],
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('ticket_id')), 'count'],
      ],
      where: {
        [Op.and]: [
          { status_id: { [Op.in]: [null, 1, 2] } },
          { dept_id: { [Op.notIn]: [14] } },
        ],
      },
      group: [[sequelize.literal('TicketStatus.name')]],
    });
    return res.json(response);
  }
}

export default new TicketByStatus();
