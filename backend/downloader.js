const { exec } = require("child_process"); // Added child_process import
const path = require("path");
const fs = require("fs");

const DOWNLOAD_DIR = path.join(__dirname, "downloads"); // Directory to save downloads
const YTDLP_PATH = path.join(__dirname, "yt-dlp.exe"); // Path to yt-dlp executable

// Ensure download directory exists

if (!fs.existsSync(DOWNLOAD_DIR)) fs.mkdirSync(DOWNLOAD_DIR);

function downloadHandler(url) {
  return new Promise((resolve, reject) => {
    const command = `"${YTDLP_PATH}" -o "${DOWNLOAD_DIR}/%(title)s.%(ext)s" ${url}`;

    console.log("⬇ Downloading with yt-dlp");

    exec(command, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

module.exports = downloadHandler;
