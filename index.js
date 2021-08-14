const mongoose = require("mongoose");
const Person = require("./Models/person");
const uri = "mongodb+srv://ziad:1234@ziadhegazi.ejy8v.mongodb.net/data?retryWrites=true&w=majority"


// connected the database to the application
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connected"))
    .catch((err) => console.log(err))

// Adding oneperson to the database
Person.create({
    name: "Jake Alen",
    age: 40,
    favoriteFoods: ["fries", "jello"]
})

// adding multiple people to the Data base
Person.create([{
    name: "Paula Alonso",
    age: 32,
    favoriteFoods: ["apple", "oranges"]
},{
    name: "Naomi Beer",
    age: 22,
    favoriteFoods: ["pasta"]
},{
    name: "Frank Russo",
    age: 32,
    favoriteFoods: ["pasta"]
},{
    name: "Mary Russo",
    age: 35,
    favoriteFoods: ["fries", "pasta"]
},{
    name: "Mary Clear",
    age: 37,
    favoriteFoods: ["fries"]
}])

// displaying all the data in the terminal
Person.find()
    .then((results) => console.log("all the people",results))
    .catch((err) => console.log(err))

// displaying one person with favorite food pasta
Person.findOne({favoriteFoods: "pasta"})
    .then((data) => console.log("one person with pasta as their favorite food:",data))
    .catch((err) => console.log(err))

// displaying one person by ID
Person.findById("611830430b830830803e0c2b")
    .then((data) => console.log("one person by ID:",data))
    .catch((err) => console.log(err))

// displaying one person by ID and adding hamburger to favorite foods
Person.findByIdAndUpdate("611830430b830830803e0c2b",{$push: {favoriteFoods: "Hamburgers"}})
    .then((data) => console.log("one person by ID and adding hamburgers:",data))
    .catch((err) => console.log(err))

// searching for one person by name and updating their age
Person.findOneAndUpdate({name: "Jake Alen"}, {$set: {age: 20}})
    .then((data) => console.log("one person with pasta as their favorite food:",data))
    .catch((err) => console.log(err))

// deleting one person by name 
Person.findOneAndRemove({name: "Frank Russo"})
    .then((data) => console.log("one person by ID deleted"))
    .catch((err) => console.log(err))

// deleting all persons named Mary
Person.deleteMany({name: /.*Mary.*/})
    .then((data) => console.log("All persons named Mary deleted"))
    .catch((err) => console.log(err))

// chain Search
Person.find().sort().limit(3)
    .then((data) => console.log("results for chain search:", data))
    .catch((err) => console.log(err))