import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher-students-table',
  templateUrl: './teacher-students-table.component.html',
  styleUrls: ['./teacher-students-table.component.css']
})
export class TeacherStudentsTableComponent implements OnInit {
studentsTab:any=[];

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  let teacherId=localStorage.getItem("userId");
  this.userService.getMystudents(teacherId).subscribe((data)=>{
    this.studentsTab=data.MystudentArray;
  })
    
  }
  goToGiveMark(id:any, tel:any){
this.router.navigate([`giveMark/${id}/${tel}`]);
  }
  goToGiveComment(id:any, tel:any){
    this.router.navigate([`giveComment/${id}`]);
  }

}
