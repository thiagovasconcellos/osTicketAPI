import Sequelize, { Model } from 'sequelize';

class TicketStatus extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: Sequelize.STRING(60),
        state: Sequelize.STRING(16),
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_ticket_status';

    return this;
  }
}

export default TicketStatus;
