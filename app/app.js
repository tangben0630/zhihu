const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const fn = require('./routes')

const router = require('./routes/home')
const heheRouter = require('./routes/users')

app.use(bodyparser())
fn(app)
// app.use(router.routes())
// app.use(heheRouter.routes())

app.listen(3010)