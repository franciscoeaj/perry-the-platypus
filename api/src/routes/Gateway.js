const Koa = {
  Router: require('koa-router')
}

const router = new Koa.Router({ prefix: '/api/v1/gateway' })
const controller = require('../controllers/Gateway')

router.get('/', async ctx => {
  await controller.index(ctx)
})

module.exports = router
