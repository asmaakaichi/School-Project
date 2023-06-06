import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
usersEducation:any=[];
id:any;
student:any={};
teachersTab:any=[];
studentForm:FormGroup;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //Display student Info
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.usersEducation=JSON.parse(localStorage.getItem("usersEducation")||"[]");
   for (let i = 0; i < this.usersEducation.length; i++) {
    if (this.usersEducation[i].id==this.id) {
      this.student=this.usersEducation[i];
      break;
    }
    
   }
   //Get all teachers
   this.usersEducation= JSON.parse(localStorage.getItem("usersEducation")||"[]");
    for (let i = 0; i < this.usersEducation.length; i++) {
      if (this.usersEducation[i].role == "teacher" && this.usersEducation[i].status == "active" ) {
        this.teachersTab.push(this.usersEducation[i]);
      }
      
    }
    console.log("Here tea Obj", this.teachersTab);
      
    }
    //Affect student to teacher
    validate(){
      console.log("Here stud Obj", this.student);
      this.id=this.activatedRoute.snapshot.paramMap.get("id");
      
      for (let i = 0; i < this.usersEducation.length; i++) {
        if (this.usersEducation[i].id==this.id) {
          this.usersEducation[i]=this.student;
          break;
         
        }
        
      }
      localStorage.setItem("usersEducation", JSON.stringify(this.usersEducation));
    }
  }


