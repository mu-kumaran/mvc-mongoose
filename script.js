console.log("mongoose is ready")
const mongoose = require("mongoose")
const User = require("./userModel") 
//here User as a class of usermodel
mongoose.connect("mongodb://127.0.0.1:27017/manojdb").then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("db error")
})

const usr = new User({rno:1002,sname:"vinoth kumar",mark:85})
usr.save().then(()=>{
    console.log("successfully inserted")
})