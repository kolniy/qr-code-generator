import express from "express";
import qrRoute from "./routes/qr.js";

const app = express();
const PORT = process.env.PORT || 7000;

app.set("view engine", "ejs");
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/v1/qr", qrRoute);
app.listen(PORT, () => console.log(`App is Listenng on port ${PORT}`));
