import sequelize, { Op } from 'sequelize';
import { format, endOfDay } from 'date-fns';

import Ticket from '../models/Ticket';

class FinishedTodayController {
  async show(req, res) {
    const today = format(Date.now(), 'yyyy-MM-dd');
    const end = endOfDay(Date.now());
    const response = await Ticket.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('ticket_id')), 'count'],
      ],
      where: {
        closed: { [Op.gte]: today, [Op.lte]: end },
      },
    });
    return res.json(response);
  }
}

export default new FinishedTodayController();
