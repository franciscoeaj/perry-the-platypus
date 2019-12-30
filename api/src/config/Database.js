require('dotenv').config()

const Sequelize = require('sequelize')

module.exports = new Sequelize(
  process.env.DB_NAME || 'perry',
  process.env.DB_USER || 'perry',
  process.env.DB_PASS || 'ultrasecretpassword',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.SEQUELIZE_DIALECT || 'postgres'
  }
)
