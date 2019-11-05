import Sequelize, { Model } from 'sequelize';

class Topic extends Model {
  static init(sequelize) {
    super.init(
      {
        topic_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        topic: Sequelize.STRING(32),
      },
      {
        sequelize,
      }
    );

    this.tableName = 'ost_help_topic';

    return this;
  }
}

export default Topic;
