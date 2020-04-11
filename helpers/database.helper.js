const Sequelize = require('sequelize');
require("dotenv").config();

  let sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

module.exports = sequelize;
