const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/menu", (req, res) => {
  res.json([
    { id: 1, name: "Margherita Pizza", price: 200 },
    { id: 2, name: "Veg Burger", price: 120 },
    { id: 3, name: "Chicken Biriyani", price: 250 }
  ]);
});

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => console.log(`Running on port ${port}`));
