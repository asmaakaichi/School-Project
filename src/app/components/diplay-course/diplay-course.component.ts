import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-diplay-course',
  templateUrl: './diplay-course.component.html',
  styleUrls: ['./diplay-course.component.css']
})
export class DiplayCourseComponent implements OnInit {
id:any;
course:any={};
courses:any=[];
constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.courseService.getCourseById(this.id).subscribe((data)=>{
  this.course=data.course;
})


  }

}
