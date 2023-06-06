import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
courses:any=[];
  constructor() { }

  ngOnInit() {
   this.courses=JSON.parse(localStorage.getItem("courses")||"[]");
  }

}