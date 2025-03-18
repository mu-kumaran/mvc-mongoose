const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    rno: Number,
    sname: String,
    mark: Number
})

const usermdl = mongoose.model("mmm",userSchema)
module.exports = usermdl