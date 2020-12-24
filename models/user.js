const mongoose = require("mongoose");

const daySchema= new mongoose.Schema({
    userID:Number,
    signIn:[Date.timestamps],
    signOut:[Date.timestamps],
    date:Date,
    attended:Boolean,
    status:{
        String,
        enum:['attended','absent','dayOff','annualLeave','accidentalLeave','sickLeave', 'maternityLeave','compensationLeave'],
        default:attended
    },
})

const userCounterSchema = new mongoose.Schema({
    name:{
        String,
        enum:['ac','hr']
    },
    counter:Number
})


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength:4,
        maxlength: 30,
        required:true
    },
    id: {
        type: String,
        unique: true,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minlength:5,
        default:"123456"
    },
    salary:{
        Number, 
        required:true
    },
    officeID:{
        required:true,
        String
    },
    role : {
        type:String,
        enum:["teachingAssistant","courseInstructor","courseCoordinator","hod", "hr"],
        required:true,
    },
    missingHours:{
        type:Number,
        default:0
    },
    missingDays: {
        Array,
        type:daySchema,
        default:[]
    },
    dayOff: {
        type:String,
        enum:["saturday","sunday", "monday","tuesday","wednesday","thursday"],
        default:"saturday"
    },
    departmentID:String,
    annualLeaves:Number
})

module.exports= mongoose.model('user' ,userSchema);
module.exports= mongoose.model('userCounter' ,userCounterSchema);
module.exports= mongoose.model('day' ,daySchema);