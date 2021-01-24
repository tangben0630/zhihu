class UsersCtl {
  index(ctx){
    if(ctx){
      // ctx.throw(412)
    }
    ctx.body = 'users'
  }
}

module.exports = new UsersCtl()