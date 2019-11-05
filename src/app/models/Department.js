import Sequelize, { Model } from 'sequelize';

class Department extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        pid: Sequelize.INTEGER,
        name: Sequelize.STRING(128),
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_department';

    return this;
  }
}

export default Department;
