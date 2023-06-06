import { Component, OnInit } from '@angular/core';
import { MarkService } from 'src/app/services/mark.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-marks-parent-table',
  templateUrl: './marks-parent-table.component.html',
  styleUrls: ['./marks-parent-table.component.css']
})
export class MarksParentTableComponent implements OnInit {
markObj:any={};
teachers:any=[];
  constructor(private userService:UserService, private markService:MarkService) { }

  ngOnInit() {
  let id=localStorage.getItem("userId")
  this.userService.getUserById(id).subscribe((data)=>{
  console.log("Here user parent", data.user);
this.markService.GetParentMark(data.user.telChild).subscribe((data)=>{
  console.log("Here data", data);
  this.markObj=data.mark;
  console.log("Here markObj", this.markObj);
this.userService.getAllTeachers().subscribe((data)=>{
this.teachers=data.teacherArray;
  });
  
});
  });
  }
  searchTeacher(id:any){
    return this.teachers.find((elt:any)=>{return elt._id==id});
  }
}
