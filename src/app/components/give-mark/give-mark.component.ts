import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MarkService } from 'src/app/services/mark.service';
import { generateId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-give-mark',
  templateUrl: './give-mark.component.html',
  styleUrls: ['./give-mark.component.css']
})
export class GiveMarkComponent implements OnInit {
  StudentMarkForm:FormGroup;
  studentMark:any={};
  constructor(private activatedRoute:ActivatedRoute, private markService:MarkService) { }

  ngOnInit() {
    
  }
validate(){
  let teacherId=localStorage.getItem("userId");
  this.studentMark.studentId=this.activatedRoute.snapshot.paramMap.get("id");
  this.studentMark.teacherId=teacherId;
  this.studentMark.telChild=this.activatedRoute.snapshot.paramMap.get("tel")
  this.markService.GiveMark(this.studentMark).subscribe((data)=>{
    console.log("Here data after save mark", data.isAdded);
    
  })


}
}
