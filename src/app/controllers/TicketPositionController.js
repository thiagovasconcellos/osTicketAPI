import Sequelize, { Op } from 'sequelize';
import Ticket from '../models/Ticket';
import Department from '../models/Department';
import TicketStatus from '../models/TicketStatus';

class TicketPositionController {
  async show(req, res) {
    const response = await Ticket.findAll({
      include: [
        {
          model: TicketStatus,
          as: 'TicketStatus',
          attributes: ['name'],
        },
        {
          model: Department,
          as: 'Department',
          attributes: ['name'],
        },
      ],
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('status_id')), 'count'],
      ],
      where: { dept_id: { [Op.notIn]: [14] } },
      group: [
        [Sequelize.literal('Department.name')],
        [Sequelize.literal('TicketStatus.name')],
      ],
      //group: [Department.name, TicketStatus.name],
      order: [[Sequelize.literal('Department.name'), 'DESC']],
    });
    return res.json(response);
  }
}

export default new TicketPositionController();
