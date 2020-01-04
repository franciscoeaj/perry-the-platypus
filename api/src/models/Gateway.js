const connector = require('../config/Database')
const Sequelize = require('sequelize')

class Gateway extends Sequelize.Model {}

Gateway.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(60),
    allowNull: false
  }
}, {
  sequelize: connector,
  modelName: 'gateways'
})

module.exports = Gateway
