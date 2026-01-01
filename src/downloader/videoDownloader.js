const fs = require("fs");
const path = require("path");
const ytdl = require("ytdl-core");

function downloadVideo(url, outputDir, filenameSafe) {
  return new Promise((resolve, reject) => {
    const name = filenameSafe || "video_" + Date.now();
    const filePath = path.join(outputDir, `${name}.mp4`);

    const writeStream = fs.createWriteStream(filePath);
    ytdl(url, { quality: "highest" })
      .pipe(writeStream)
      .on("finish", () => resolve(filePath))
      .on("error", reject);
  });
}

module.exports = { downloadVideo };
