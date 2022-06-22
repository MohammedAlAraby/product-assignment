const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  Id: Number,
  Name: String,
  Image: String,
  Description: String 
});

module.exports = mongoose.model('product', productSchema);