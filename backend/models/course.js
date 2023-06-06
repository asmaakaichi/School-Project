//Import mongoose module
const mongoose =require ("mongoose");
//schema
const courseSchema=mongoose.Schema({
   
    name: String,
    description:String,
    modules:String,
    teacherId:String,
    course:String,
});
//model Name(collection 'courses' will be created/genrated)
const course=mongoose.model("Course", courseSchema);
//Make file exportable
module.exports=course;