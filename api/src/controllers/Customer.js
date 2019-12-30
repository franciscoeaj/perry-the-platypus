const Model = require('../models/Customer')
const Connector = require('../config/Database')
const Customer = new Model(Connector)

class CustomerController {
  async index (ctx) {
    try {
      const result = await Customer.all()
      ctx.body = result
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }
}

module.exports = new CustomerController()
