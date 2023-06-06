import { Component, OnInit } from '@angular/core';
import { MarkService } from 'src/app/services/mark.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css']
})
export class MarksTableComponent implements OnInit {
mark:any=[];
findedTeacher:any={};
  constructor(private markService:MarkService, private userService:UserService) { }

  ngOnInit() {
let userId=localStorage.getItem("userId");
 this.markService.GetStudentMark(userId).subscribe((data)=>{
this.mark=data.studentMark;
this.userService.getAllTeachers().subscribe((data)=>{
  this.findedTeacher=data.teacherArray;
  console.log("here teach", this.findedTeacher);
  
})
 });
   };

searchTeacher(id:any){
  return this.findedTeacher.find((elt:any)=>{return elt._id==id});
}
  }
// 
//   markcolor(x){
// if (x>=0 && x<=10) {
//   return "red"
// }
// else if (x>=11 && x<=15){
//   return "orange";
// }
// else{
//   return "green";
// }

//   }


