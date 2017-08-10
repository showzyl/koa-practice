const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.cookies.set('view', n);
  ctx.cookies.get('view');
};

app.use(main)

app.listen(3000, () => {
  console.log('please open http://127.0.0.1:3000')
})