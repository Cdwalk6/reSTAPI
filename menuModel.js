const mongoose = require("mongoose");

// destructuring to pull schema out of mongoose
const {Schema} = mongoose;

// create the menuModel
const menuModel = new Schema(
   {
    fsq_id: {type: String},
    menuItems: [{itemId: String, name: String, description: String, price: Number}]
   }
);

module.exports = mongoose.model('Menu', menuModel);