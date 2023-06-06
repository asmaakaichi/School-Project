import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courseForm:FormGroup;
  courses:any=[];
  findedCourse:any={};
  id:any;
  constructor(private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute, private courseService:CourseService, private router:Router) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.courseService.getCourseById(this.id).subscribe((data)=>{
  this.findedCourse=data.course
})

this.courseForm=this.formBuilder.group({
  name:[""],
  description:[""],
  modules:[""],
})
  }
  editCourse(){
  this.courseService.editCourse(this.findedCourse).subscribe((data)=>{
    console.log("Here data", data);
      this.router.navigate(["teacherDashboard"]);
  })
  }

}
