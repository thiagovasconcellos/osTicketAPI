import Sequelize from 'sequelize';

import dbConfig from '../config/database';

import Department from '../app/models/Department';
import Organization from '../app/models/Organization';
import Staff from '../app/models/Staff';
import Team from '../app/models/Team';
import Ticket from '../app/models/Ticket';
import TicketStatus from '../app/models/TicketStatus';
import Topic from '../app/models/Topic';
import User from '../app/models/User';

const models = [
  Department,
  Organization,
  Staff,
  Team,
  Ticket,
  TicketStatus,
  Topic,
  User,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
