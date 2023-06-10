import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tokenDecode: any;
  userRole: string;
  userId: string;
  findedUser: any = {};
  user: any = {};
  userIsAuthenticated = false;
  private authListenerSubs: Subscription
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit() {
    this.authListenerSubs =
      this.userService.getAuthStatusListener().subscribe(
        isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
          this.user = this.userService.getName();
          this.userRole = localStorage.getItem("userRole");
          this.userId = localStorage.getItem("userId");
        }
      )
    this.userId = localStorage.getItem("userId");

    this.userRole = localStorage.getItem("userRole");
    this.user = localStorage.getItem('firstName');

    this.tokenDecode = localStorage.getItem("token");
    console.log(this.tokenDecode);

    if (typeof this.tokenDecode == 'undefined' || this.tokenDecode == null) {
      this.userIsAuthenticated = false
    } else {
      this.userIsAuthenticated = true
    }
    console.log(this.userIsAuthenticated);

    this.tokenDecode = jwt_decode(this.tokenDecode);
    console.log(this.tokenDecode);


    //  });
  }
  // ngOnInit() {
  //   this.userRole=localStorage.getItem("userRole");
  //   this.userId=localStorage.getItem("userId");
  //  this.userService.getUserById(this.userId).subscribe((data)=>{
  //   console.log("Here user", data);
  //   this.findedUser=data.user;
  //  });
  // };
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  logout() {
    this.userService.logout();
  }


  editProfile(id) {
    this.router.navigate([`editProfile/${id}`])
  }
  // logout(){
  //   localStorage.removeItem("userId");
  //   localStorage.removeItem("userRole");
  // this.router.navigate([""]);
  // }

}
