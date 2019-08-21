const requestHeader = (req: any, res: any, next: any) => {
  if (req.headers.isallowed) {
    return next();
  }
  res.send(400, { error: "Not allowed" });
};

export default requestHeader;
