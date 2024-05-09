import * as Router from "@koa/router";

export const globalRouter = new Router();

globalRouter.get("/test", (ctx) => {
  ctx.body = "Hello World";
});
