import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000/users";
  public token: string;
  private authStatusListener = new Subject<boolean>();
  private isUserAuthenticated = false;
  private firstName: string;

  constructor(private httpClient: HttpClient, private router: Router) { }
  getToken() {
    return this.token;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  isUserAuth() {
    return this.isUserAuthenticated;
  }
  getName() {
    return this.firstName;

  }
  public getUserRole() {
    return localStorage.getItem('userRole');
  }

  signupAdmin(user) {
    return this.httpClient.post<{ message: boolean }>(this.userURL, user);
  }
  signupStudent(user: any, file: File) {
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("tel", user.tel);
    formData.append("adress", user.adress);
    formData.append("level", user.level);
    formData.append("role", user.role);
    formData.append("img", file);

    return this.httpClient.post<{ message: boolean }>(this.userURL + "/signup/student", formData);
  }
  signupTeacher(user: any, file: File) {
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("tel", user.tel);
    formData.append("adress", user.adress);
    formData.append("longitude", user.longitude);
    formData.append("latitude", user.latitude);
    formData.append("speciality", user.speciality);
    formData.append("role", user.role);
    formData.append("cv", file);
    return this.httpClient.post<{ message: boolean }>(this.userURL + "/signup/teacher", formData);
  }
  signupParent(user) {
    return this.httpClient.post<{ message: boolean }>(this.userURL + "/signup/parent", user);
  }

  login(user) {
    this.httpClient.post<{ user: any, message: string }>(this.userURL +
      "/login/all", user).subscribe(
        (res) => {
          const token = res.user.jwt;
          this.token = token;
          console.log("here result after login", token);
          if (token) {
            this.isUserAuthenticated = true;
            this.firstName = res.user.firstName;

            this.authStatusListener.next(true);
            localStorage.setItem('token', token);
            localStorage.setItem('firstName', res.user.firstName);
            localStorage.setItem('userRole', res.user.role);
            localStorage.setItem('userId', res.user.id);
            this.router.navigate(['/']);
          }
        }
      )
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    this.isUserAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }


  getAllUsers() {
    return this.httpClient.get<{ userArray: any }>(this.userURL);
  }
  getUserById(id) {
    return this.httpClient.get<{ user: any }>(`${this.userURL}/${id}`);
  }
  editProfile(newProfile) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.userURL, newProfile);
  }
  deleteProfile(id: any) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.userURL}/${id}`);
  }
  getAllTeachers() {
    return this.httpClient.get<{ teacherArray: any }>(this.userURL + "/teacher/getAll");
  }
  Affect(newUser) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.userURL + "/updateUser", newUser)
  }
  getMystudents(id) {
    return this.httpClient.get<{ MystudentArray: any }>(`${this.userURL}/teacher/student/getMyStudent/${id}`);
  }
  editUser(newUser) {
    return this.httpClient.put<{ message: String }>(this.userURL + "/updateUser/pwd", newUser);
  }
}
