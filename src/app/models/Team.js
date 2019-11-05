import Sequelize, { Model } from 'sequelize';

class Team extends Model {
  static init(sequelize) {
    super.init(
      {
        team_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        lead_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        name: Sequelize.STRING(125),
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_team';

    return this;
  }
}

export default Team;
