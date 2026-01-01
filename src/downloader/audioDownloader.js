const ffmpeg = require("fluent-ffmpeg");
const ytdl = require("ytdl-core");

function downloadMP3(url, output) {
  return new Promise((resolve) => {
    ffmpeg(ytdl(url, { quality: "highestaudio" }))
      .audioBitrate(128)
      .save(output)
      .on("end", resolve);
  });
}

module.exports = downloadMP3;
