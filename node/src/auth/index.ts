import jwt from "./jwt";
import local from "./local";

/**
 * Initialize passports strategies
 *
 */
const initializePassport = () => {
  jwt.initialize();
  local.initialize();
};

export default initializePassport;
