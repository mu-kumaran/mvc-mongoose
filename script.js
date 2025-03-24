console.log("mongoose is ready")
const mongoose = require("mongoose")
const User = require("./userModel") 
//here User as a class of usermodel

// Mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/manojdb").then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("db error")
})

// Inserting data into mongodb through mongoose
var hob = ["Books","Movies","Travel"]
const usr = new User({rno:1006,sname:"THANGAVEL",mark:79,hobbies:hob,city:"covai"})
usr.save().then(()=>{
    console.log("successfully inserted")
})