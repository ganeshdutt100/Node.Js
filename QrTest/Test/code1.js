import express from "express";
import qr from "qr-image";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

app.get("/generate", (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const qr_svg = qr.imageSync(url, { type: "png" });
  const base64Image = `data:image/png;base64,${qr_svg.toString("base64")}`;

  res.json({ qr: base64Image });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
