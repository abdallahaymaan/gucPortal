const mongoose = require("mongoose");

const leaveRequestSchema = new mongoose.Schema({
    senderID:String,
    hodID:String,
    type:{
        String,
        enum:['annualLeave','accidentalLeave','sickLeave', 'maternityLeave','compensationLeave'],
        default:attended
    },
    targetDay:Date,
    replacementRequestID:{
        Number,
        required:true
    },
    reason:String,
    state:{
        String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    },
    reply:String
    

})


const changeDayOffRequestSchema = new mongoose.Schema({
    staffID:{
        Number,
        required:true
    },
    courseCoordinatorID:Number,
    state:{
        String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    },
    reply:String
})

const replacementRequestSchema = new mongoose.Schema({
    staffID:Number,
    replacementStaffID:Number,
    state:{
        String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    }
})

const slotLinkingRequestSchema = new mongoose.Schema({
    slotID:Number,
    state:{
        String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    },
    teachingAssistantID:Number,
    courseCoordinatorID:Number,

})

module.exports= mongoose.model('leaveRequest' ,leaveRequestSchema);
module.exports= mongoose.model('replacementRequest' ,replacementRequestSchema);
module.exports= mongoose.model('changeDayOffRequest' ,changeDayOffRequestSchema);
module.exports= mongoose.model('slotLinkingRequest' ,slotLinkingRequestSchema);

