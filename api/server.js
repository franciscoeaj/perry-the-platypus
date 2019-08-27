require('dotenv').config()

const Koa = {
  Instance: require('koa'),
  Router: require('koa-router'),
  Logger: require('koa-logger'),
  BodyParser: require('koa-bodyparser')
}

const utils = require('./utils')
const convert = require('xml-js')
const app = new Koa.Instance()
const router = new Koa.Router()
const axios = require('axios')
const port = process.env.PORT || 3000

app.use(Koa.Logger())
app.use(Koa.BodyParser())

router.get('/', ctx => {
  ctx.body = 'Hello World!'
})

router.post('/api/notification/listener', async ctx => {
  if (ctx.is('application/x-www-form-urlencoded')) {
    if (ctx.request.header.origin === utils.getBaseApiURL()) {
      const { notificationCode, notificationType } = ctx.request.body
      const url = utils.getNotificationApiURL(notificationCode)
      const response = await axios.get(url)

      const data = convert.xml2json(response.data, {
        compact: true,
        spaces: 2,
        nativeType: true
      })

      ctx.status = 200
      return
    }
  }

  ctx.status = 403
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port)
console.log(`Listening on port ${port}...`)
