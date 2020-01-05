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

  async get (ctx) {
    try {
      const customer = await Customer.findByPk(ctx.params.id)

      if (customer === null) {
        ctx.status = 404
        return
      }

      ctx.body = customer
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }

  async new (ctx) {
    try {
      const customer = await Customer.create(ctx.request.body)

      ctx.status = 201
      ctx.body = customer
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }

  async update (ctx) {
    try {
      const customer = await Customer.update(ctx.request.body, { where: { id: ctx.params.id }, returning: true })

      if (customer[0] === 0) {
        ctx.status = 404
        return
      }

      ctx.status = 200
      ctx.body = customer
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }
}

module.exports = new CustomerController()
