const Customer = require('../models/Customer')

class CustomerController {
  async index (ctx) {
    try {
      const result = await Customer.findAll()
      ctx.body = result
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }
}

module.exports = new CustomerController()
