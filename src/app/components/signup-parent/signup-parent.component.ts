import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-parent',
  templateUrl: './signup-parent.component.html',
  styleUrls: ['./signup-parent.component.css']
})
export class SignupParentComponent implements OnInit {
  signupForm: FormGroup
  errorMsg:String;
  
  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.signupForm= this.formBuilder.group({
      firstName:["", [Validators.required, Validators.minLength(3)]],
      lastName:["", [Validators.required, Validators.minLength(5)]],
      email:["", [Validators.required, Validators.email]],
      pwd:["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      tel:[""],
      telChild:[""]
     
    })
  }


  
  signupParent(){
  this.signupForm.value.role="parent";
this.userService.signupParent(this.signupForm.value).subscribe((data)=>{
  console.log("Here data", data.message);
  if (data.message) {
    this.router.navigate(["login"])
  } else {
   this.errorMsg="Email or Tel Exists" 
  }
  
})
  }


}
