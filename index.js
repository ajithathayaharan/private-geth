import 'babel-polyfill';
import Koa from 'koa';

var app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'Hello world'; 
});

app.listen(3000);
console.log("Application started. Listening on port:" + 3000);
