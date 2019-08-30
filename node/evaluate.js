const mochawesome = require("./mochawesome-report/mochawesome.json");

const evaluate = () => {
  if (!mochawesome.stats.failures === 0) {
    process.exit(0);
  } else {
    process.exit(1);
  }
};

evaluate();
