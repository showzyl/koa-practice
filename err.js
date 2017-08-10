
const Koa = require('koa');
const app = new Koa();


const main = ctx => {
  // ctx.throw(500)
  ctx.response.status = 404;
  ctx.response.body = 'Page Not Found';
};

app.use(main);

app.listen(3001, () => {
  console.log('please open http://127.0.0.1:3001')
})