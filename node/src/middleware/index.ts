import example from "./example";
import responseTime from "./responseTime";
import jwt from "./jwt";

const mw = [example, responseTime];

export { mw, jwt };
