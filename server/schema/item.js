const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  Food: { type: String },
  id: { type: String },
  Utensils: { type: String },
  Toys: { type: String },
  FoodType: { type: String },
  quantity: { type: String },
  unit: { type: String },
});

const itemModel = mongoose.model("Item", itemSchema);

module.exports = { itemModel };
