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

// Inserting data into mongodb through mongoose using create() method

async function manoj()
{
    try{
        const dataset = await User.create({
            rno:1001,
            sname:"manoj",
            mark:99,
            hobbies:["cricket","swimming","Karate"],
            city:"karur",
            address:{
                street:"S.P.Colony (east), Kongu nagar, Vengamedu",
                landmark:"near ghori temple"
            }
        })

        //update

        dataset.sname = "manojkumar"
        dataset.rno = 1002,
        dataset.mark = 88
        await dataset.save()
        console.log("Success! Inserted Id",dataset)
    }
    catch(err){
        console.log("Error",err)
    }
}

manoj();