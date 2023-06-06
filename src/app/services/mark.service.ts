import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
markURL:string="http://localhost:3000/marks";
constructor(private httpClient:HttpClient) { }
GiveMark(mark){
return this.httpClient.post<{isAdded:boolean}>(this.markURL,mark);
}
GetStudentMark(id){
return this.httpClient.get<{studentMark:any}>(`${this.markURL}/${id}`);
}
GetTeacherObj(id){
return this.httpClient.get<{teacherObj:any}>(`${this.markURL}/teacher/${id}`);
}
GetParentMark(tel:any){
  return this.httpClient.get<{mark:any}>(`${this.markURL}/mark/parent/${tel}`);
}
}
