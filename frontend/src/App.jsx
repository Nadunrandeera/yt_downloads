import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");// State to hold the YouTube URL
  const [status, setStatus] = useState("");

  const startDownload = async () => {
    if (!url) {
      setStatus("Please paste a YouTube link");
      return;
    }

    setStatus("Starting download...");

    try {
      const res = await fetch("http://localhost:4000/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setStatus(data.message || data.error);
    } catch (err) {
      setStatus("Backend not running");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>YouTube Downloader</h2>

      <input
        type="text"
        placeholder="Paste YouTube link here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: 400, padding: 8 }}
      />

      <br />
      <br />

      <button onClick={startDownload}>Download</button>

      <p>{status}</p>
    </div>
  );
}

export default App;
