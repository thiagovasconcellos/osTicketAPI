import Sequelize, { Model } from 'sequelize';

class Staff extends Model {
  static init(sequelize) {
    super.init(
      {
        staff_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        dept_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        role_id: Sequelize.INTEGER,
        username: Sequelize.STRING(32),
        firstname: Sequelize.STRING(32),
        lastname: Sequelize.STRING(32),
        email: Sequelize.STRING(128),
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_staff';

    return this;
  }
}

export default Staff;
