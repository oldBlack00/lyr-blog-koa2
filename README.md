# 腾讯云小程序解决方案 Demo - Node.js

Node.js 版本 Wafer SDK 的服务端 Demo

## 下载源码

你可以直接通过 git 将代码 clone 到本地，也可以点击[这里](https://github.com/tencentyun/wafer-node-server-demo/releases)下载。

```bash
git clone https://github.com/tencentyun/wafer-node-server-demo.git
```

## 开始使用

#### 安装依赖

```bash
# 安装全局依赖
npm i nodemon -g

# 安装项目依赖
npm i
```

#### 启动项目

```bash
# 开发环境，监听文件变化自动重启，并会输出 debug 信息
npm run start
```

## 项目结构

```
koa-weapp-demo
├── README.md
├── app.js
├── controllers
│   ├── index.js
│   ├── demo.js
├── middlewares
│   └── response.js
├── config.js
├── package.json
├── nodemon.json
└── routes
    └── index.js
```
`app.js` 是 Demo 的主入口文件，Demo 使用 Koa 框架，在 `app.js` 创建一个 Koa 实例并响应请求。

`routes/index.js` 是 Demo 的路由定义文件

`controllers` 存放 Demo 所有业务逻辑的目录，`index.js` 不需要修改，他会动态的将 `controllers` 文件夹下的目录结构映射成 modules 的 Object，例如 Demo 中的目录将会被映射成如下的结构：

```javascript
// index.js 输出
{
  demo: require('demo'),
  test: require('test')
}
```

