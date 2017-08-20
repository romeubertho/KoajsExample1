/* @flow */
import app from './app';

const PORT = 5400;

app.use(async ctx => {
    ctx.body = 'Hello Koa!';
});

app.listen(PORT);
console.log(`Server started on port ${PORT}`);