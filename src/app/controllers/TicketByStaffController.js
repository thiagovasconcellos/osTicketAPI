import sequelize from 'sequelize';

import Ticket from '../models/Ticket';
import Staff from '../models/Staff';
import TicketStatus from '../models/TicketStatus';

class TicketByStaffController {
  async show(req, res) {
    const response = await Ticket.findAll({
      include: [
        {
          model: Staff,
          required: true,
          attributes: ['firstname', 'lastname'],
        },
        {
          model: TicketStatus,
          attributes: [
            [sequelize.fn('COUNT', sequelize.col('status_id')), 'count'],
            'name',
          ],
        },
      ],
      attributes: ['staff_id'],
      group: ['Staff.firstname', 'TicketStatus.name'],
    });

    return res.json(response);
  }
}

export default new TicketByStaffController();
