import responseTime from "response-time";

const request = (req: any, res: any, next: any) => {
  if (req.headers.isallowed) {
    return next();
  }
  res.send(400, { error: "Not allowed" });
};

const timer = responseTime();

const mw = [request, timer];

export default mw;
