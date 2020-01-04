const Gateway = require('../models/Gateway')

class GatewayController {
  async index (ctx) {
    try {
      const result = await Gateway.findAll()
      ctx.body = result
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }

  async get (ctx) {
    try {
      const gateway = await Gateway.findByPk(ctx.params.id)

      if (gateway === null) {
        ctx.code = 404
        return
      }

      ctx.body = gateway
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }

  async new (ctx) {
    try {
      const gateway = await Gateway.create(ctx.request.body)

      ctx.status = 201
      ctx.body = gateway
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }

  async update (ctx) {
    try {
      const gateway = await Gateway.update(ctx.request.body, { where: { id: ctx.params.id }, returning: true })

      ctx.status = 200
      ctx.body = gateway
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }

  async delete (ctx) {
    try {
      const gateway = await Gateway.destroy({ where: { id: ctx.params.id } })

      ctx.status = 200
      ctx.body = gateway
    } catch (error) {
      console.log(error)
      ctx.throw(400, 'INVALID_DATA' + error)
    }
  }
}

module.exports = new GatewayController()
