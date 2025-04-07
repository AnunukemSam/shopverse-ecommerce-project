const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Product Service Running 🚀");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Product service listening on port ${PORT}`);
});
