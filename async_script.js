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
const usr = new User({rno:1007,sname:"Vimalan",mark:89,hobbies:hob,city:"chennai"})
// usr.save().then(()=>{
//     console.log("successfully inserted")
// })

async function manoj()
{
    try{
        const dataset = await usr.save()
        console.log("Success! Inserted Id",dataset)
    }
    catch(err){
        console.log("Error",err)
    }
}

manoj();