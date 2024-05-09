import "./libs/opentelemetry";
import * as Koa from "koa";
import { globalRouter } from "./routes";
import { uuidMiddleware } from "./middlewares";

(async () => {
  const app = new Koa();

  app.use(uuidMiddleware);
  app.use(globalRouter.routes());

  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
})();
