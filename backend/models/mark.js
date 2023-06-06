//Import mongoose module
const mongoose =require ("mongoose");
//schema
const markSchema=mongoose.Schema({
   
    mark: String,
    studentId:String,
    teacherId:String,
    telChild:String
});
//model Name(collection 'marks' will be created/genrated)
const mark=mongoose.model("Mark", markSchema);
//Make file exportable
module.exports=mark;