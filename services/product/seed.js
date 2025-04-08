const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Cloud Engineer Sticker Pack",
      description: "20 high-quality waterproof stickers",
      price: 8,
      category: "Accessories",
      image: "https://example.com/stickers.png",
    },
    {
      name: "Kubernetes Tumbler",
      description: "Insulated bottle for on-the-go DevOps pros",
      price: 25,
      category: "Drinkware",
      image: "https://example.com/tumbler.png",
    },
  ]);

  console.log("🧠 Products seeded!");
  mongoose.disconnect();
});

