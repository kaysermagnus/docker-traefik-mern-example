import os from "os";
import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from "express";

const app = express();

const mw: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.isallowed) {
    next();
  }
  res.json({ error: "Not allowed" });
};

app.use(mw);

app.get("/", (_req: Request, res: Response) => {
  return res.json({
    host: {
      hostname: os.hostname(),
      network: os.networkInterfaces()["eth0"][0].address
    }
  });
});

const server = app.listen(8080);

server.on("listening", () =>
  console.log("Server started at:", server.address())
);
