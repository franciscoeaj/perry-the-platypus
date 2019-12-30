const connector = require('../config/Database')
const Sequelize = require('sequelize')

class Customer extends Sequelize.Model {}

// id (maybe integer?, PK, AI);
// document (String, document value/number represented as a String);
// documentType (String/ENUM, should be "CPF" or "CNPJ");  00.000.000/0000-00 (14 dig, 18 com ce) | 000.000.000-00 (11 dig, 14 com ce)
// firstName (String, customer's first name);
// lastName (String, customer's last name);
// nickname (String, how the customer wants to be called);
// street (String, street address);
// streetNumber (integer, street address number);
// city (String, self-explanatory);
// state (String, self-explanatory);
// country (String, self-explanatory);
// this.addressAdditionalInfo = addressAdditionalInfo

Customer.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  documentValue: {
    type: Sequelize.STRING,
    allowNull: false
    // TODO: validate format, must be 00.000.000/0000-00 (14 numbers, 18 considering everything) | 000.000.000-00 (11 numbers, 14 considering everything)
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
