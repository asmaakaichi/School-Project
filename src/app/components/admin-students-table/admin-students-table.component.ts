import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-students-table',
  templateUrl: './admin-students-table.component.html',
  styleUrls: ['./admin-students-table.component.css']
})
export class AdminStudentsTableComponent implements OnInit {
studentsTab:any=[];
usersEducation:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.usersEducation=JSON.parse(localStorage.getItem("usersEducation")||"[]");
    for (let i = 0; i < this.usersEducation.length; i++) {
     if (this.usersEducation[i].role=="student") {
      this.studentsTab.push(this.usersEducation[i]);
     }
      
    }
    console.log("Here student Obj", this.studentsTab)
  }
goTodisplayStudent(id:any){
this.router.navigate([`displayStudent/${id}`]);
  }

}
