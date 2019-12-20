import sequelize, { Op } from 'sequelize';

import Ticket from '../models/Ticket';

class TopFinishesController {
  async show(req, res) {
    const response = await Ticket.findAll({
      attributes: [
        [sequelize.literal('date(closed)'), 'date'],
        [sequelize.fn('COUNT', sequelize.col('ticket_id')), 'count'],
      ],
      group: [[sequelize.literal('date(closed)'), 'date']],
      where: {
        closed: { [Op.not]: null },
      },
      order: [[sequelize.literal('count'), 'DESC']],
      limit: 1,
    });
    return res.json(response);
  }
}

export default new TopFinishesController();
