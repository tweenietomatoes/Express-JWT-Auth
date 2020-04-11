const Sequelize = require('sequelize');

const sequelize = require('../helpers/database.helper');

let todoModel = sequelize.define('Todo', {
  Id: {
    type: Sequelize.BIGINT,
    field: 'Id',
    autoIncrement: true,
    primaryKey: true
  },
  Todo: {
    type: Sequelize.STRING,
    field: 'Todo'
  },
  Completed: {
    type: Sequelize.BOOLEAN,
    field: 'Completed'
  }
});

module.exports = todoModel;
