function extractMetadata(video) {
  return {
    title: video.title,
    artist: video.author?.name || "Unknown",
    duration: video.duration,
  };
}

module.exports = extractMetadata;
