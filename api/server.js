require("dotenv").config();

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
  // verify if its form-urlencoded and from which url the request has been made
  if (ctx.is("application/x-www-form-urlencoded")) {
    // TODO: make request to api given the received transaction code and handle the returned data
  } else {
    ctx.body = "Invalid request";
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
console.log(`Listening on port ${port}...`);
