import { parseISO } from 'date-fns';
import Sequelize, { Op } from 'sequelize';
import Ticket from '../models/Ticket';
import Organization from '../models/Organization';
import User from '../models/User';

class TicketOpenedByOrgController {
  async show(req, res) {
    const { inicio, fim } = req.query;

    const parsedIni = parseISO(inicio);
    const parsedFim = parseISO(fim);

    const response = await Ticket.findAll({
      where: { created: { [Op.between]: [parsedIni, parsedFim] } },
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('ticket_id')), 'count'],
      ],
      include: [
        {
          model: User,
          attributes: ['id'],
          include: [
            {
              model: Organization,
              attributes: ['name'],
            },
          ],
        },
      ],
      group: ['Ticket.user_id'],
      order: [[Sequelize.literal('count'), 'DESC']],
    });

    return res.json(response);
  }
}

export default new TicketOpenedByOrgController();
