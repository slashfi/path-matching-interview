const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

// Path matching middleware function to be implemented
const openApiHandlerMiddleware = async (ctx, next) => {
  // TODO: Implement path matching logic here
  await next();
};

// Apply the middleware
app.use(openApiHandlerMiddleware);

// Example route
app.use(async (ctx) => {
  ctx.body = { message: 'Hello World' };
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});