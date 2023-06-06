import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: any = {};
  errorMsg: string;

  constructor(private router: Router, private userService:UserService) { }

  ngOnInit() {
  }
  signin() {
  this.userService.login(this.login).subscribe((data)=>{
  console.log("Here message after login:Message", data.message);
  console.log("Here message after login:User", data.user);
  if (data.message=="2") {
  localStorage.setItem("userId", data.user.id);
  localStorage.setItem("userRole", data.user.role)
  } else {
   this.errorMsg="Please check email or tel/pwd"
  }
  })
}
}
