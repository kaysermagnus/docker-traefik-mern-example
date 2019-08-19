import koa, { Context } from "koa";
import Router from "koa-router";
//import mw from "../middleware";
import api from "../api";

const mw = (ctx: Context, next: any) => {
  if (ctx.req.headers.isallowed) {
    next();
  }
  ctx.res.end({ error: "Not allowed" });
};

const webServer = () => {
  console.info("Starting Koa server");
  const app = new koa();
  const router = new Router();

  //app.use(mw);
  api(router);

  app.use(router.routes()).use(router.allowedMethods());

  return app.callback();
};

export default webServer;
