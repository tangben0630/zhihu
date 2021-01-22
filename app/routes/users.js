const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {index} = require('../controllers/users')
router.get('/hehe',index)

module.exports = router