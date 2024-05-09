import "./libs/opentelemetry";
import * as Koa from "koa";
import { globalRouter } from "./routes";

(async () => {
  const app = new Koa();

  app.use(globalRouter.routes());

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
  });
})();
