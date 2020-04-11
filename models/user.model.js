const Sequelize = require('sequelize');

const sequelize = require('../helpers/database.helper');

let userModel = sequelize.define('User', {
  Id: {
    type: Sequelize.BIGINT,
    field: 'Id',
    autoIncrement: true,
    primaryKey: true
  },
  Username: {
    type: Sequelize.STRING,
    field: 'Username'
  },
  Email: {
    type: Sequelize.STRING,
    field: 'Email'
  },
  Password: {
    type: Sequelize.STRING,
    field: 'Password'
  }
});

module.exports = userModel;
