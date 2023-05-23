const { Schema, model } = require("mongoose");

const shopSchema = new Schema(
  {
    name: String,
    products: Array,
  },
  { versionKey: false, timestamps: true }
);

const Shop = model("shop", shopSchema);

module.exports = { Shop };
