const cliProgress = require("cli-progress");

function createProgressBar(total) {
  const bar = new cliProgress.SingleBar({
    format: "Downloading [{bar}] {percentage}% | {value}/{total}",
  });

  bar.start(total, 0);
  return bar;
}

module.exports = createProgressBar;
