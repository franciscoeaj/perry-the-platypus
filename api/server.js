require("dotenv").config();

const configs = require("./constants/payment-method-config");
const endpoints = configs.endpoints;
const constants = configs.constants;

const Koa = {
  Instance: require("koa"),
  Router: require("koa-router"),
  Logger: require("koa-logger"),
  BodyParser: require("koa-bodyparser")
};

const app = new Koa.Instance();
const router = new Koa.Router();
const axios = require("axios");
const port = process.env.PORT || 3000;

app.use(Koa.Logger());
app.use(Koa.BodyParser());

router.get("/", (ctx, next) => {
  ctx.body = "Hello World!";
});

router.post("/notification/listener", (ctx, next) => {
  if (ctx.is("application/x-www-form-urlencoded")) {
    if (
      ctx.request.origin ===
      `${constants.PS_REQUEST_PROTOCOL}://${constants.PS_REQUEST_HOST}`
    ) {
      // make a request asking about the received transaction code and handle it
      // axios is available to do so
    }

    console.log(endpoints);
    ctx.body = "enos";
  } else {
    ctx.body = "Invalid request";
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
console.log(`Listening on port ${port}...`);
