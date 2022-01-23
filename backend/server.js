import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

const app = express();

//simple test message on home
app.get("/", (req, res) => {
  res.send("API is running... ");
});

//Display complete products as Json
app.get("/api/products", (req, res) => {
  res.json(products);
});

//Display single product as Json
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
