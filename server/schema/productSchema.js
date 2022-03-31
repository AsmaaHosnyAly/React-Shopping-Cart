const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  ImgUrl: String,
  des: String,
  price: Number,
  size: [String],
});
module.exports = productSchema;
