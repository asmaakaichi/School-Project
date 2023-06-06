import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  usersEducation: any = [];
  teachersTab: any = [];
  constructor() { }

  ngOnInit() {
    this.usersEducation = JSON.parse(localStorage.getItem("usersEducation") || "[]");
    for (let i = 0; i < this.usersEducation.length; i++) {
      if (this.usersEducation[i].role == "teacher" && this.usersEducation[i].status == "active"   ) {
        this.teachersTab.push(this.usersEducation[i]);
      }

    }
  }

}
