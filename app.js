const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const heheRouter = new Router({prefix:'/hehe'})

const auth = async (ctx, next)=>{
  if(ctx.url == '/aaa'){
    ctx.throw(401)
  }
  await next()
}
router.get('/',(ctx)=>{
  ctx.body = ';;;;'
})
router.get('/user/:id',(ctx)=>{
  // ctx.set() 
  ctx.status = 404
  ctx.body = '这是特定用户'+ ctx.params.id
})
heheRouter.get('/nihao',(ctx)=>{
  ctx.body = ''
})
app.use(router.routes())
app.use(heheRouter.routes())

app.listen(3008)