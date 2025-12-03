const { Sequelize } = require('sequelize');

const db = new Sequelize('financas_pessoais', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;