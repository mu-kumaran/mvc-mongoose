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

//CRUD operation through mongoose

async function manoj()
{
    try{
        const dataset = await User.findById("67e28ba05141c395647290a0")
        const data1 = await User.find({sname:"vimalan"})
        const data2 = await User.find({mark:{$gt:50}})
        const data3 = await User.where("sname")
        const data4 = await User.where("sname").equals("manoj")
        const data5 = await User.where("mark").gt(50)
        const data6 = await User.where("mark").gt(50).lt(80)
        const data7 = await User.where("mark").gt(50).limit(1) // .skip(1)
        const deldata = await User.deleteOne({rno:1001})
        const data8 = await User.insertOne({
            rno:1001,
            sname:"Palanivel",
            mark:45,
            city:"karur",
            address:{
                DoorNo: "45-B",
                street: "Ambedkar street",
                landmark: "near leela garden"
            }
        })
        console.log("My Result:",dataset)
        console.log("My Result1:",data1)
        console.log("My Result2:",data2)
        console.log("My Result3:",data3)
        console.log("My Result4:",data4)
        console.log("My Result5:",data5)
        console.log("My Result5:",data5.length)
        console.log("My Result6:",data6)
        console.log("My Result6:",data6.length)
        console.log("My Result7:",data7)
        console.log("My deldata:",deldata)
        console.log("My Result8:",data8)
    }
    catch(err){
        console.log("Error Reason:",err.toString())
    }
}

manoj();