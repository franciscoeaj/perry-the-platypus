const Koa = {
  Router: require('koa-router')
}

const router = new Koa.Router({ prefix: '/api/v1/customer' })
const controller = require('../controllers/Customer')

router.get('/', async (ctx, next) => {
  await controller.index(ctx)
})

router.get('/:id', async (ctx, next) => {
  await controller.get(ctx)
})

module.exports = router
