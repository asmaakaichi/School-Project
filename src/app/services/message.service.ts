import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageURL:string="http://localhost:3000/messages";
  constructor(private httpClient:HttpClient) { }
  sendMessage(obj){
    return this.httpClient.post(this.messageURL, obj);
  }
  searchLocation(obj){
    return this.httpClient.post<{teacherObj:any}>(this.messageURL+"/search", obj);
  }
}
