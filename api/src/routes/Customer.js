const Koa = {
  Router: require('koa-router')
}

const router = new Koa.Router({ prefix: '/api/v1/customer' })
const controller = require('../controllers/Customer')

router.get('/', async ctx => {
  await controller.index(ctx)
})

router.get('/:id', async ctx => {
  await controller.get(ctx)
})

router.post('/', async ctx => {
  await controller.new(ctx)
})

router.put('/:id', async ctx => {
  await controller.update(ctx)
})

module.exports = router
