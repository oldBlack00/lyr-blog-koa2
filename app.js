const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('lyr-blog-koa2')
const responseMiddleware = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
// 使用响应处理中间件
app.use(responseMiddleware)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
const router = require('./routers')
app.use(router.routes())

app.listen(config.port, () => debug(`listening on port ${config.port}`))