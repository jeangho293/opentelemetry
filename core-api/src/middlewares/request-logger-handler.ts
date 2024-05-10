import type { Context, Next } from "koa";
import * as winston from "winston";

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

export const requestLoggerMiddleware = async (ctx: Context, next: Next) => {
  try {
    await next();

    logger.info(`${ctx.method} ${ctx.url} - ${ctx.status} : ${ctx.state.txId}`);
  } catch (err) {
    console.error(err);
  }
};
