const mongoose = require("mongoose");


const slotSchema = new mongoose.Schema({
    type:{
        String,
        enum:["lab","tutorial","lecture"]
    },
    teachingAssistantID:{
        String, default:"none"
    },
    courseCode:String,
    location:String,
    // slotDate:Date,
    slotDay:{
        type:Number,
        enum:[0,1,2,3,4,5,6]
    },
    SlotTime:{
        type:Number,
        enum:[1,2,3,4,5]
    },
    location:String

})


const facultySchema = new mongoose.Schema({
    name:{
        String,
        unique:true,
        required:true
    }
})

const departmentSchema = new mongoose.Schema({
    name:{
        String,
        unique:true,
        required:true
    },
    facultyName:{String,required:true},
    hodID:String,
    courses:[courseScheme]
})


const courseScheme = new mongoose.Schema({
    courseCode: {
        String,
        unique:true,
        required:true
    },
    instructorID:String,
    academicMembers:[String],
    courseCodID:String,
    teachingSlots:{
        Number,
        default:0
    },
    assignedSlots:{
        Number,
        default:0
    },
    departmentName:{
        String,
        required:true
    },
})



module.exports = mongoose.model('course',courseScheme);
module.exports = mongoose.model('department',departmentSchema);
module.exports = mongoose.model('faculty',facultySchema);
module.exports = mongoose.model('slot',slotSchema);
