import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        org_id: Sequelize.INTEGER,
        default_email_id: Sequelize.INTEGER,
        status_id: Sequelize.INTEGER,
        name: Sequelize.STRING(128),
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_user';

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Organization, { foreignKey: 'org_id' });
  }
}

export default User;
