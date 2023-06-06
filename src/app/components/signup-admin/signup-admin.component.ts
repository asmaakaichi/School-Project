import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg:String;
  id:any;
  constructor(private router:Router, private fromBuilder:FormBuilder, private userService:UserService  ) { }

  ngOnInit() {
    this.signupForm= this.fromBuilder.group({
      firstName:["", [Validators.required, Validators.minLength(3)]],
      lastName:["", [Validators.required, Validators.minLength(5)]],
      email:["", [Validators.required, Validators.email]],
      pwd:["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      tel:[""]
    });
  
  }
  signup() {
 this.signupForm.value.role="admin";
 this.userService.signupAdmin(this.signupForm.value).subscribe((data)=>{
  console.log("Here into BL", data.message);
  if (data.message) {
    this.router.navigate(["login"])
  } else {
   this.errorMsg="Email or Tel Exists" 
  }
 })
  }
}
