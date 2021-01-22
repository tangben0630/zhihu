class UsersCtl {
  index(ctx){
    ctx.body = 'users'
  }
}

module.exports = new UsersCtl()