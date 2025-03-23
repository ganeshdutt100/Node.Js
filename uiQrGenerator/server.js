import express from "express";
import qr from "qr-image";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/generate", (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const qr_png = qr.imageSync(url, { type: "png" });

  const base64Image = `data:image/png;base64,${qr_png.toString("base64")}`;

  res.json({ qr: base64Image });
});

app.listen(3009, () =>
  console.log("✅ Server running on http://localhost:3009")
);
