let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let productSchema = new Schema({
	
  user: String,
  login: Number,
  email: String,
 
 });

module.exports = mongoose.model("products", productSchema);