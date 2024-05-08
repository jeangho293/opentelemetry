import * as Router from "@koa/router";

export const globalRouter = new Router();

globalRouter.get("/", (ctx) => {
  ctx.body = "Hello World";
});
