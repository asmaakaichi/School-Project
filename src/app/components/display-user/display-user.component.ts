import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
id:any;
user:any;
studentForm:FormGroup;

teachersTab:any=[];

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
this.id= this.activatedRoute.snapshot.paramMap.get("id");
this.userService.getUserById(this.id).subscribe((data)=>{
this.user=data.user;
  });

this.userService.getAllTeachers().subscribe((data)=>{
this.teachersTab=data.teacherArray;
})
  }
validate(){

this.userService.Affect(this.user).subscribe((data)=>{
  console.log("Here data after affect", data.isUpdated);
  
});
}

}
