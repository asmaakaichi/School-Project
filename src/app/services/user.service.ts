import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL:string="http://localhost:3000/users";
  constructor(private httpClient:HttpClient) { }
  signupAdmin(user){
    return this.httpClient.post<{message:boolean}>(this.userURL,user);
  }
  signupStudent(user:any, file:File){
    let formData= new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("tel", user.tel);
    formData.append("adress", user.adress);
    formData.append("level", user.level);
    formData.append("role", user.role);
    formData.append("img", file);

    return this.httpClient.post<{message:boolean}>(this.userURL+"/signup/student", formData);
  }
signupTeacher(user:any, file:File){
  let formData= new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("tel", user.tel);
    formData.append("adress", user.adress);
    formData.append("speciality", user.speciality);
    formData.append("role", user.role);
    formData.append("cv", file);
  return this.httpClient.post<{message:boolean}>(this.userURL+"/signup/teacher", formData);
}
signupParent(user){
  return this.httpClient.post<{message:boolean}>(this.userURL+"/signup/parent", user);
}
login(user){
 return this.httpClient.post<{message:string, user:any}>(this.userURL+"/login/all",user);
}
getAllUsers(){
  return this.httpClient.get<{userArray:any}>(this.userURL);
}
getUserById(id){
  return this.httpClient.get<{user:any}>(`${this.userURL}/${id}`);
}
editProfile(newProfile){
  return this.httpClient.put<{isUpdated:boolean}>(this.userURL, newProfile);
}
deleteProfile(id:any){
return this.httpClient.delete<{isDeleted:boolean}>(`${this.userURL}/${id}`);
}
getAllTeachers(){
  return this.httpClient.get<{teacherArray:any}>(this.userURL+"/teacher/getAll");
}
Affect(newUser){
return this.httpClient.put<{isUpdated:boolean}>(this.userURL+"/updateUser", newUser)
}
getMystudents(id){
  return this.httpClient.get<{MystudentArray:any}>(`${this.userURL}/teacher/student/getMyStudent/${id}`);
}
editUser(newUser){
  return this.httpClient.put(this.userURL+"/updateUser/pwd", newUser);
}
}
