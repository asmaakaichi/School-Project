import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userRole:string;
userId:string;
findedUser:any={};
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.userRole=localStorage.getItem("userRole");
    this.userId=localStorage.getItem("userId");
   this.userService.getUserById(this.userId).subscribe((data)=>{
    console.log("Here user", data);
    this.findedUser=data.user;
   });
  };
  editProfile(id){
this.router.navigate([`editProfile/${id}`])
  }
logout(){
  localStorage.removeItem("userId");
  localStorage.removeItem("userRole");
this.router.navigate([""]);
}
searchUsers(uId){
  
  
}
}
