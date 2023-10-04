import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("API is working fine ...");
});

app.get("/api/product", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port.`);
});
