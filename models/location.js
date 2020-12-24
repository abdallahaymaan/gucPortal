
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    officeID:{
        String,
        unique:true,
        required:true
    },
    type:{
        String,
        enum:['lab','office','tutorial'],
        required:true
    },
    capacity:{
        Number,
        default:0
    },
    maximumCapacity:Number
})

module.exports= mongoose.model('notification' ,notificationSchema);
