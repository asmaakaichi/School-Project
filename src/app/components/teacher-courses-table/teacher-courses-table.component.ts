import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-teacher-courses-table',
  templateUrl: './teacher-courses-table.component.html',
  styleUrls: ['./teacher-courses-table.component.css']
})
export class TeacherCoursesTableComponent implements OnInit {
  coursesTab: any = [];

  constructor(private router: Router, private courseService:CourseService) { }

  ngOnInit() {
  let teacherId = localStorage.getItem("userId");
  this.courseService.getTeacherCourses(teacherId).subscribe((data)=>{
  this.coursesTab=data.coursesArray;
  })
  }
  goToDisplay(id: any) {
    this.router.navigate([`displayCourse/${id}`])
  }
  goToEdit(id: any) {
    this.router.navigate([`editCourse/${id}`]);
  }
  deleteCourse(id: any) {
   this.courseService.deleteCourse(id).subscribe((data)=>{
    console.log("Here data after delete", data.isDeleted);
    
   })
    
  }
}
