import sequelize, { Op } from 'sequelize';

import Ticket from '../models/Ticket';

class TicketPendent {
  async show(req, res) {
    const response = await Ticket.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('ticket_id')), 'count'],
      ],
      where: {
        dept_id: { [Op.notIn]: [14] },
        staff_id: { [Op.eq]: 0 },
        isanswered: { [Op.eq]: 0 },
        team_id: { [Op.eq]: 0 },
      },
    });
    return res.json(response);
  }
}

export default new TicketPendent();
