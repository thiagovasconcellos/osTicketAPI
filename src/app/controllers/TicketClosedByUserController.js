import { parseISO } from 'date-fns';
import Sequelize, { Op } from 'sequelize';
import Ticket from '../models/Ticket';
import Staff from '../models/Staff';

class TicketClosedByUserController {
  async show(req, res) {
    const { inicio, fim } = req.query;

    const parsedIni = parseISO(inicio);
    const parsedFim = parseISO(fim);

    const closeds = await Ticket.findAll({
      group: ['Ticket.staff_id'],
      where: { status_id: 3, closed: { [Op.between]: [parsedIni, parsedFim] } },
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('status_id')), 'count'],
      ],
      include: [
        {
          model: Staff,
          attributes: ['firstname', 'lastname'],
        },
      ],
      order: [[Sequelize.literal('count'), 'DESC']],
    });

    return res.json(closeds);
  }
}

export default new TicketClosedByUserController();
