const fs = require("fs");

function getResumeOptions(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const fileSize = fs.statSync(filePath).size;
  return {
    range: { start: fileSize },
  };
}

module.exports = getResumeOptions;
