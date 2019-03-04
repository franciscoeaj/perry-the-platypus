require("dotenv").config();

const Koa = {
  Instance: require("koa"),
  Router: require("koa-router"),
  Logger: require("koa-logger")
};

const app = new Koa.Instance();
const router = new Koa.Router();
const port = process.env.PORT || 3000;

app.use(Koa.Logger());

router.get("/", (ctx, next) => {
  ctx.body = "Hello World!";
});

router.post("/notification/listener", (ctx, next) => {
  console.log(ctx.request);
  ctx.body = "POST req made successfully";
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
console.log(`Listening on port ${port}...`);
