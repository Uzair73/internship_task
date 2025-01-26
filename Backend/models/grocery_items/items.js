const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
    },
  item: { 
    type: String, 
    required: true 
  },
  priority: { 
    type: String, 
    default: "Medium"
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "grocery_categories"
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User-authentication",
    required: true 
  },
});

module.exports = mongoose.model("Category_Items_List", ListSchema);