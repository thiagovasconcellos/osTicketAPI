import Sequelize, { Model } from 'sequelize';

class Ticket extends Model {
  static init(sequelize) {
    super.init(
      {
        ticket_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        number: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
        status_id: Sequelize.INTEGER,
        dept_id: Sequelize.INTEGER,
        topic_id: Sequelize.INTEGER,
        staff_id: Sequelize.INTEGER,
        team_id: Sequelize.INTEGER,
        isoverdue: Sequelize.BOOLEAN,
        isanswered: Sequelize.BOOLEAN,
        created: Sequelize.DATE,
        updated: Sequelize.DATE,
        closed: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_ticket';

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.TicketStatus, { foreignKey: 'status_id' });
    this.belongsTo(models.Department, { foreignKey: 'dept_id' });
    this.belongsTo(models.Topic, { foreignKey: 'topic_id' });
    this.belongsTo(models.Staff, { foreignKey: 'staff_id' });
    this.belongsTo(models.Team, { foreignKey: 'team_id' });
  }
}

export default Ticket;
