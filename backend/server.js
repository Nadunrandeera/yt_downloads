const express = require("express");
const cors = require("cors");
const downloadHandler = require("./downloader");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/download", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    downloadHandler(url);
    res.json({ message: "Download started" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () =>
  console.log("🚀 Backend running on http://localhost:4000")
);
