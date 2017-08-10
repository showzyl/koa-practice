'use strict'

const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const path = require('path')
const staticFile = require('koa-static');
const main = staticFile(path.join(__dirname));


// const logger = (ctx, next) => {
//   console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
//   next();
// }

// app.use(logger)

const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next();
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);


app.listen(3000, () => {
  console.log('please open http://127.0.0.1:3000')
})











