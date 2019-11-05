import Sequelize, { Model } from 'sequelize';

class Organization extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: Sequelize.STRING(128),
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_organization';

    return this;
  }
}

export default Organization;
