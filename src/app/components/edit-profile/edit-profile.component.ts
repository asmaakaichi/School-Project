import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
editForm:FormGroup;
id:any;
user:any={};
  constructor(private fromBuilder:FormBuilder, private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.editForm= this.fromBuilder.group({
      firstName:[""],
      lastName:[""],
      email:[""],
      oldPwd:[""],
      newPwd:[""],
      tel:[""],
      adress:[""]
    });
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.userService.getUserById(this.id).subscribe((data)=>{
      this.user=data.user;
    })
  }
  edit(){
    this.userService.editUser(this.user).subscribe()
  }

}
