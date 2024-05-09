import * as Router from "@koa/router";
import axios from "axios";

export const globalRouter = new Router();

globalRouter.get("/", async (ctx) => {
  const { data } = await axios.get("http://localhost:4000/test", {
    headers: {
      "x-request-id": ctx.state.txId,
    },
  });
  ctx.body = { data };
});
