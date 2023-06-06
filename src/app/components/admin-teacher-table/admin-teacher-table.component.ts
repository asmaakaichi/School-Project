import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-teacher-table',
  templateUrl: './admin-teacher-table.component.html',
  styleUrls: ['./admin-teacher-table.component.css']
})
export class AdminTeacherTableComponent implements OnInit {
    usersTab: any = [];
 
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
   this.userService.getAllUsers().subscribe((data)=>{
    this.usersTab=data.userArray
   })
   
  }
  goToDisplay(id){
  this.router.navigate([`displayUser/${id}`]);
  }
  goToEdit(id){
    this.router.navigate([`editUser/${id}`]);
  }
  deleteUser(id){
  this.userService.deleteProfile(id).subscribe((data)=>{
  console.log("Here data after data", data.isDeleted);
  this.userService.getAllUsers().subscribe((data)=>{
    this.usersTab=data.userArray;
  })
  })
  }

  confirmTeacher(id) {

    for (let i = 0; i < this.usersTab.length; i++) {
      if (this.usersTab[i].id == id) {
        this.usersTab[i].status = "active";
        break;
      }
    }
    localStorage.setItem("usersEducation", JSON.stringify(this.usersTab));
  }

}
