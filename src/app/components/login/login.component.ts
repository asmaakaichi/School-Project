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
    if (this.login.pwd && (this.login.email || this.login.tel)) {
      this.userService.login(this.login);
      }
      
  }
}

