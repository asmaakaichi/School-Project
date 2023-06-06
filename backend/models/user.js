const mongoose=require("mongoose");

const uniqueValidator = require('mongoose-unique-validator');
//Schema
const userSchema=mongoose.Schema({
    firstName:String,
    lastName: String,
    email:{type:String, unique: true},
    pwd:String,
    tel:{type:String, unique: true},
    telChild:String,
    adress:String,
    level:String,
    speciality:String,
    role:String,
    img:String,
    cv:String,
    teacherId:String,
    courseId:String,
    
   
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

const user=mongoose.model("User", userSchema );
module.exports=user;