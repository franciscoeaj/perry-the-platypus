const Koa = {
  Router: require('koa-router')
}

const router = new Koa.Router()
const controller = require('../controllers/Customer')

router.get('/api/v1/customer', async (ctx, next) => {
  await controller.index(ctx)
})

module.exports = router
