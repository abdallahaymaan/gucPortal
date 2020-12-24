
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    msg:String,
    staffID:{
        String,
        required:true
    },
    time:{
        Date,
        default:Date.now
    }
})

module.exports= mongoose.model('notification' ,notificationSchema);
