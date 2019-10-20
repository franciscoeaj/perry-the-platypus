require('dotenv').config()

const Sequelize = require('sequelize')

const database = new Sequelize(
  process.env.DB_NAME || 'perry',
  process.env.DB_USER || 'perry',
  process.env.DB_PASS || 'ultrasecretpassword',
  {
    host: process.env.DB_HOST || 'localhost', 
    dialect: process.env.SEQUELIZE_DIALECT || 'mariadb'
  }
)

module.exports = database
