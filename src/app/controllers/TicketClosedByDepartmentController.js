import { parseISO } from 'date-fns';
import Sequelize, { Op } from 'sequelize';
import Ticket from '../models/Ticket';
import Department from '../models/Department';

class TicketClosedByDepartmentController {
  async show(req, res) {
    const { inicio, fim } = req.query;

    const parsedIni = parseISO(inicio);
    const parsedFim = parseISO(fim);

    const closeds = await Ticket.findAll({
      group: ['Ticket.dept_id'],
      where: { status_id: 3, closed: { [Op.between]: [parsedIni, parsedFim] } },
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('dept_id')), 'count']],
      include: [
        {
          model: Department,
          attributes: ['name'],
        },
      ],
      order: [[Sequelize.literal('count'), 'DESC']],
    });

    return res.json(closeds);
  }
}

export default new TicketClosedByDepartmentController();
