import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchForm: FormGroup;
findedCourse:any;
coursesTab:any=[];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.coursesTab= JSON.parse(localStorage.getItem("courses")||"[]");
    this.searchForm=this.formBuilder.group({
      name:[""]
    })
  }
  Search(){
   this.findedCourse=[];
    console.log("Here course Name", this.searchForm.value);
    for (let i = 0; i < this.coursesTab.length; i++) {
      if (this.coursesTab[i].name== this.searchForm.value.name) {
       this.findedCourse.push(this.coursesTab[i]);
      } 
    }
    console.log ("Here finded Courses", this.findedCourse);
  }
}
