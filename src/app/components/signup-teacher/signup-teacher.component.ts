import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent implements OnInit {
signupForm:FormGroup;
filePreview:any;
errorMsg:string;

  constructor(private router:Router, private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.signupForm= this.formBuilder.group({
      firstName:["", [Validators.required, Validators.minLength(3)]],
      lastName:["", [Validators.required, Validators.minLength(5)]],
      email:["", [Validators.required, Validators.email]],
      pwd:["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      tel:[""],
      adress:[""],
      speciality:[""],
      cv:[""]
      
     
    })
  }
  signupTeacher(){
this.signupForm.value.role="teacher";
this.userService.signupTeacher(this.signupForm.value, this.signupForm.value.cv).subscribe((data)=>{
  if (data.message) {
    this.router.navigate(["login"])
  } else {
    this.errorMsg="Email or Tel Exists" 
  }
})
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ cv: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.filePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
