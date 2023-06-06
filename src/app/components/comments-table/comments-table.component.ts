import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.css']
})
export class CommentsTableComponent implements OnInit {
  coursesTab: any = [];
  findedTeacher: any = {};
  id: any;
  teachers:any=[];
  constructor(private userService: UserService, private courseService: CourseService) { }

  ngOnInit() {
    this.id = localStorage.getItem("userId");
    this.userService.getUserById(this.id).subscribe((data) => {
      console.log("Here user", data.user);
      this.courseService.getStudentCourses(data.user.courseId).subscribe((data) => {
        console.log("heere data.coursesArray", data.coursesArray[0].teacherId);

        this.coursesTab = data.coursesArray;
      });
      this.userService.getAllTeachers().subscribe((data)=>{
 this.teachers=data.teacherArray;
 console.log("Here all teachers", this.teachers);
 
      });
    });


  }

  searchTeacher(id){
    return this.teachers.find((elt:any)=>{return elt._id==id});
  }


}
