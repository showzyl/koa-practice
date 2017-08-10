'use strict'

// demos/01.js
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

// const main = ctx => {
//   if (ctx.request.accepts('xml')) {
//     ctx.response.type = 'xml';
//     ctx.response.body = '<data>Hello World</data>';
//   } else if (ctx.request.accepts('json')) {
//     ctx.response.type = 'json';
//     ctx.response.body = { data: 'Hello World' };
//   } else if (ctx.request.accepts('html')) {
//     ctx.response.type = 'html';
//     ctx.response.body = '<p>Hello World</p>';
//   } else {
//     ctx.response.type = 'text';
//     ctx.response.body = 'Hello World';
//   }
// };

// const main = ctx => {
//   ctx.response.type = 'html';
//   ctx.response.body = fs.createReadStream('./lizi.html');
// };


// // route
// const main = ctx => {
//   if (ctx.request.path !== '/') {
//     ctx.response.type = 'html';
//     ctx.response.body = '<h3>我不是主页</h3><br/><a href="/">Index Page</a>';
//   } else {
//     ctx.response.body = '主页';
//   }
// };

const route = require('koa-route');

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<h3>我不是主页</h3><br/><a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));

// ctx.response.redirect('/');


app.use(main);

app.listen(3000, () => {
  console.log('please open http://127.0.0.1:3000')
})


