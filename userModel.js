const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    /*  Normal format
       rno: Number,
       sname: String,
       mark: Number
     */
    rno: {
        type:Number,
        required:true
    },
    sname: {
        type:String,
        required:true,
        // uppercase:true
        lowercase:true
    },
    mark: {
        min:0,
        max:100,
        type:Number,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date()
        // default: ()=>Date.now()
    }, 
    hobbies:[String],
    city:{
        type:String,
        required:true,
        validate:{
            validator: c=> (c==="karur"||c==="chennai"||c==="covai"),
            message: `city is not allowed`
        }
    }
})

const usermdl = mongoose.model("mmm",userSchema)
module.exports = usermdl