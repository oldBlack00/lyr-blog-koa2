module.exports = async ctx => {
    ctx.state.data = {
        msg: 'test'
    }
}

// const Koa = require('koa');
// const app = new Koa()
// const bodyparser = require('koa-bodyparser')

// app.use(bodyparser());

// app.use(async(ctx)=>{
//     if(ctx.url === '/login'&&ctx.method === 'GET'){
//         //显示表单页面
//         let html = `
//             <h1>LYR request POST</h1>
//             <form action="/" method="POST">
//                 <p>userName</p>
//                 <input name="username" type="text" /> </br>
//                 <p>userPossword</p>
//                 <input name="password" type="password" /> </br>
//                 <button type="submit">submit</button>
//             </form>
//         `;
//         ctx.body = html
//     }else if(ctx.url === '/login'&&ctx.method === 'POST'){
//         let postdata = ctx.request.body;
//         ctx.body = postdata;
//     }else {
//         ctx.body='<h1>404</h1>'
//     }
// });

// app.listen(3000,()=>{
//     console.log('server is staring at port 3000')
// })