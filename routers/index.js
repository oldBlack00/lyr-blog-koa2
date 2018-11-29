/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/api'
})
const controllers = require('../controllers')
console.log(controllers);
router.get('/demo', controllers.demo)
router.get('/test', controllers.test)
router.get('/login', controllers.login)

module.exports = router
