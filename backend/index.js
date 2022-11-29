const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

const fishes = require("./fakeData/crabData.json");
const categories = require("./fakeData/categories.json");
const fishCards = require("./fakeData/fishCardData.json");

app.get("/", (req, res) => {
  res.send("machbazar server is running here");
});

// The categories on the left side nav
app.get("/categories", (req, res) => {
  res.send(categories);
});

// All the fish cards in home page coming from fish cards
app.get("/fishCards", (req, res) => {
  res.send(fishCards);
});

// viewing details after clicking on fish card
app.get("/fishCard/:id", (req, res) => {
  const fishId = req.params.id;
  const fishData = fishCards.find((fish) => fish.id === fishId);
  res.send(fishData);
});

//  clicking on category or searching on search bar
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const fishData = fishes.filter((f) => f.category_id === id);
  res.send(fishData);
});

app.listen(port, () => {
  console.log("machbazar");
});
