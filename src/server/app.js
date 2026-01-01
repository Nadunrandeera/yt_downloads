const express = require("express");
const app = express();

app.use(express.json());

app.post("/download", async (req, res) => {
  const { playlistUrl, type } = req.body;
  // trigger downloader
  res.json({ status: "Started" });
});

app.listen(4000, () => console.log("Server running on 4000"));
