const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const fn = require('./routes')
const paramater = require('koa-parameter')
const koaerror = require('koa-json-error')

// app.use((ctx, next)=>{ngnixiangshuosm ne ??
//   try {
//     next()
//   } catch (error) {
//     ctx.status = error.status || error.statusCode || 500
//     ctx.body = {
//       message: error.message
//     }
//   }
// })
app.use(bodyparser())
app.use(paramater(app))
app.use(koaerror({
  postFormat: (e,{stack,...rest})=>{

  }
}))
fn(app)
// app.use(router.routes())
// app.use(heheRouter.routes())

app.listen(3010)