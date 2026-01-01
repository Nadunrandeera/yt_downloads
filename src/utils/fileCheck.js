const fs = require("fs");

function alreadyDownloaded(filePath) {
  return fs.existsSync(filePath);
}

module.exports = alreadyDownloaded;
