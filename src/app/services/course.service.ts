import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseURL: string = "http://localhost:3000/courses";
  constructor(private httpClient: HttpClient) { }

  addCourse(obj, file: File) {
    let formData = new FormData();
    formData.append("name", obj.name);
    formData.append("description", obj.description);
    formData.append("modules", obj.modules);
    formData.append("teacherId", obj.teacherId);
    formData.append("course", file);
    return this.httpClient.post<{ message: boolean }>(this.courseURL, formData);
  }
  getTeacherCourses(id) {
    return this.httpClient.get<{ coursesArray: any }>(`${this.courseURL}/teacher/${id}`)
  }
  getCourseById(id) {
    return this.httpClient.get<{ course: any }>(`${this.courseURL}/teacher/course/${id}`)
  }
  editCourse(newCourse) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.courseURL, newCourse);
  }
  deleteCourse(id) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.courseURL}/${id}`)
  }
  getMyCourses(id) {
    return this.httpClient.get<{ coursesArray: any }>(`${this.courseURL}/teacher/course/getMy/${id}`);
  }
  AffectCourse(newCourse) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.courseURL + "/updateCourse", newCourse);
  }
  getStudentCourses(id) {
    return this.httpClient.get<{ coursesArray: any }>(`${this.courseURL}/student/course/getMy/courseStudent/${id}`);
  }
  getTeacherCourse(id) {
    console.log("id into service", id);

    return this.httpClient.get<{teacher:any}>(`${this.courseURL}/student/course/getMy/courseStudent/teacher/x/${id}`);
  }
}
