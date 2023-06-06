import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
courseForm:FormGroup;
findeduser:any=[];
filePreview:any;
  constructor(private formBuilder:FormBuilder, private router:Router, private courseService:CourseService) { }

  ngOnInit() {
   this.courseForm= this.formBuilder.group({
      name:["", [Validators.required, Validators.minLength(3)]],
      description:["", [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      modules:["", [Validators.required, Validators.minLength(3)]],
      course:[""]
    })
  }

  addCourse(){
    
    let teacherId= localStorage.getItem("userId");
    this.courseForm.value.teacherId= teacherId;
   this.courseService.addCourse(this.courseForm.value, this.courseForm.value.course).subscribe((data)=>{
    console.log("Here course", data.message);
    
   })

}
onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.courseForm.patchValue({ course: file });
  this.courseForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
  this.filePreview = reader.result as string
  };
  reader.readAsDataURL(file);
  }
}
