import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  id: any;
  user: any = {};
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      pwd: [""],
      tel: [""],
      adress: [""]
    });
    this.id = localStorage.getItem('userId');
    console.log(this.id);
    
    this.userService.getUserById(this.id).subscribe((data) => {
      this.user = data.user;
    })
  }
  edit() {
    this.userService.editProfile(this.user).subscribe((data) => {
      console.log("Here data", data);
      this.router.navigate(["adminDashboard"]);
    })
  }
}
