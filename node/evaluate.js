const fs = require("fs");

const evaluate = () => {
  const mochawesome = JSON.parse(
    fs.readFileSync("./mochawesome-report/mochawesome.json", {
      encoding: "utf8"
    })
  );
  console.log(mochawesome.stats.failures);
  if (mochawesome.stats.failures === 0) {
    process.exit(0);
  } else {
    process.exit(1);
  }
};

evaluate();
