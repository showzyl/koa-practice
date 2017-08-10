const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./lizi.html', 'utf8');
};

app.use(main);
app.listen(3000,  () => {
  console.log('please open http://127.0.0.1:3000')
});