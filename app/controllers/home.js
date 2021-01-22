class HomeCtl {
  index(ctx){
    ctx.body = '这是主2页'
  }
}

module.exports = new HomeCtl()