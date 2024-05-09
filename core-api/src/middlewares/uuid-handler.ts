import { v4 as uuid } from "uuid";
import type { Context, Next } from "koa";

export const uuidMiddleware = async (ctx: Context, next: Next) => {
  ctx.state.txId = ctx.state.txId || uuid();
  await next();
};
