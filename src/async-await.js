import app from './app';

const PORT = 5400;

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    console.log(`1 started at ${start}`);
    await next();
    const ms = Date.now() - start;
    console.log(`3 done in ${ms}ms`);
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`2 ${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(async ctx => {
    console.log('Hello Koa! A prommise with async-await');
    ctx.body = 'Hello Koa! A promisse with async-await';
});

app.listen(PORT);
console.log(`Server started on port ${PORT}`);