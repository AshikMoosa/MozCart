const express = require("express");
const products = require("./data/products");

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

app.listen(5000, console.log("Server running on port 5000"));
