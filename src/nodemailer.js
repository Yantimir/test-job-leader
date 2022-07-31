import express from "express";
import bodyParser from "body-parser";

import Mail from "./mail.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/cart", (req, res) => {
  console.log(req.body)
  res.sendFile(__dirname + "./pages/CartPage.jsx")
});

app.post("/cart", async (req, res) => {
  const { email, message } = req.body;
  return res.json({ result: await Mail.send(email, message) });
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}/cart`)
})


export default app








