const connector = require('../config/Database')
const Sequelize = require('sequelize')

class Customer extends Sequelize.Model {}

Customer.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  documentValue: {
    type: Sequelize.STRING,
    allowNull: false
  },
  documentType: {
    type: Sequelize.ENUM('CPF', 'CNPJ'),
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  street: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  addressAdditionalInfo: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  state: {
    type: Sequelize.STRING(2),
    allowNull: false
  },
  country: {
    type: Sequelize.STRING(60),
    allowNull: false,
    defaultValue: 'Brazil'
  }
}, {
  sequelize: connector,
  modelName: 'customers'
})

module.exports = Customer
