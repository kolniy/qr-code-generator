import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import qrRoute from "./routes/qr.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 7000;

app.set("view engine", "ejs");
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, "../public/css/style.css")));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/v1/qr", qrRoute);
app.listen(PORT, () => console.log(`App is Listening on port ${PORT}`));
