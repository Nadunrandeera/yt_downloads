const ytpl = require("ytpl");
const fs = require("fs");
const path = require("path");
const ytdl = require("ytdl-core");

const PLAYLIST_URL = "https://youtu.be/hHKYX06S7o4?si=qsXqao96zf2o63qH";
const DOWNLOAD_DIR = path.join(__dirname, "../downloads");

if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR);
}

async function downloadPlaylist() {
  const playlist = await ytpl(PLAYLIST_URL, { limit: Infinity });

  console.log(`Downloading playlist: ${playlist.title}`);

  for (const video of playlist.items) {
    const filePath = path.join(
      DOWNLOAD_DIR,
      `${video.title.replace(/[^\w\s]/gi, "")}.mp4`
    );

    console.log(`Downloading: ${video.title}`);

    ytdl(video.url, { quality: "highest" }).pipe(
      fs.createWriteStream(filePath)
    );
  }
}

downloadPlaylist();
