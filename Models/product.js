let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let productSchema = new Schema({
	
  Name: String,
  price: Number,
  Fuel: String,
  fueltank: Number,
  model: String,
  emmil: String,Number,
  password:String,
 });

module.exports = mongoose.model("products", productSchema);



