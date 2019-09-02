/**
 * Custom middleware
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const requestHeader = (req: any, res: any, next: any) => {
  if (req.headers.isallowed) {
    return next();
  }
  res.send(400, { error: "Not allowed" });
};

export default requestHeader;
