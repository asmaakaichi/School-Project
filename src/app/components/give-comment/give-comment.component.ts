import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-give-comment',
  templateUrl: './give-comment.component.html',
  styleUrls: ['./give-comment.component.css']
})
export class GiveCommentComponent implements OnInit {
  id:any;
  StudentForm:FormGroup;
  studentCourse:any={};
  coursesTab:any=[];
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService, private courseService:CourseService) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.userService.getUserById(this.id).subscribe((data)=>{
this.studentCourse=data.user;
});
//Get My courses
let teacherId=localStorage.getItem("userId");
this.courseService.getMyCourses(teacherId).subscribe((data)=>{
this.coursesTab=data.coursesArray;
})

  }

validate(){
  this.courseService.AffectCourse(this.studentCourse).subscribe((data)=>{
    console.log("Here student after update", data.isUpdated);
    
  }) 
}
}
