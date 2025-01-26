const mongoose = require("mongoose");

const categories_Schema = new mongoose.Schema({
  Category_Name: { 
    type: String, 
    required: true 
},
  user: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: "User-authenticationr", 
     required: true 
},
});

module.exports = mongoose.model("grocery_categories", categories_Schema);
