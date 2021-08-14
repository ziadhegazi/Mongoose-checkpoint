const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name : {type:String, required:true, unique:true},
    age : {type:Number, default:"N/A"},
    favoriteFoods : {type:Array, default:"N/A"}
})

const model = mongoose.model("Person", personSchema);

module.exports = model;