const compose = require('koa-compose');
const Koa = require('koa');
const app = new Koa();

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);
app.use(middlewares);


app.listen(3000, () => {
  console.log('please open http://127.0.0.1:3000')
})