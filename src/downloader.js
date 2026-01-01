const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");

ffmpeg.setFfmpegPath(ffmpegPath);

function downloadAudio(url, outputPath) {
  return new Promise((resolve, reject) => {
    const stream = ytdl(url, { quality: "highestaudio" });

    ffmpeg(stream)
      .audioBitrate(128)
      .save(outputPath)
      .on("end", resolve)
      .on("error", reject);
  });
}

module.exports = downloadAudio;
