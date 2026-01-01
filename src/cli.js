#!/usr/bin/env node
const { program } = require("commander");

program
  .name("youtube-playlist-downloader")
  .description("CLI for downloading YouTube playlists and tracks")
  .version("1.0.0");

program
  .option("-p, --playlist <url>", "YouTube playlist URL")
  .option("-v, --video", "Download video")
  .option("-a, --audio", "Download audio only")
  .option("-o, --output <dir>", "Output directory", "downloads");

program.parse(process.argv);

const opts = program.opts();

if (!opts.playlist) {
  console.log("No playlist URL provided. Use -p <url>.");
  process.exit(0);
}

console.log(
  "CLI stub: playlist=%s, video=%s, audio=%s, output=%s",
  opts.playlist,
  !!opts.video,
  !!opts.audio,
  opts.output
);
console.log("Wire this CLI to downloader modules in src/downloader/*.js");
