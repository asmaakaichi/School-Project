import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AdminTeacherTableComponent } from './components/admin-teacher-table/admin-teacher-table.component';
import { AdminStudentsTableComponent } from './components/admin-students-table/admin-students-table.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { TeacherDashbordComponent } from './components/teacher-dashbord/teacher-dashbord.component';
import { TeacherCoursesTableComponent } from './components/teacher-courses-table/teacher-courses-table.component';
import { TeacherStudentsTableComponent } from './components/teacher-students-table/teacher-students-table.component';
import { DiplayCourseComponent } from './components/diplay-course/diplay-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { GiveMarkComponent } from './components/give-mark/give-mark.component';
import { GiveCommentComponent } from './components/give-comment/give-comment.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { MarksTableComponent } from './components/marks-table/marks-table.component';
import { CommentsTableComponent } from './components/comments-table/comments-table.component';
import { ClassComponent } from './components/class/class.component';
import { TransformPipe } from './pipes/transform.pipe';
import { WhitespacePipe } from './pipes/whitespace.pipe';
import { SearchComponent } from './components/search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule  } from "@angular/common/http";
import { SafePipe } from './pipes/safe.pipe';
import { SignupParentComponent } from './components/signup-parent/signup-parent.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ParentDashboardComponent } from './components/parent-dashboard/parent-dashboard.component';
import { MarksParentTableComponent } from './components/marks-parent-table/marks-parent-table.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { SendMessageComponent } from './components/send-message/send-message.component';
import { InterceptorService } from './services/interceptor.service';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FacilitiesComponent,
    AboutComponent,
    ClassesComponent,
    RegistrationComponent,
    TeachersComponent,
    TestimonialComponent,
    BlogComponent,
    FooterComponent,
    ArticlesComponent,
    HomeComponent,
    ContactComponent,
    SignupStudentComponent,
    SignupTeacherComponent,
    SignupAdminComponent,
    LoginComponent,
    AdminDashboardComponent,
    AddCourseComponent,
    AdminTeacherTableComponent,
    AdminStudentsTableComponent,
    StudentInfoComponent,
    TeacherDashbordComponent,
    TeacherCoursesTableComponent,
    TeacherStudentsTableComponent,
    DiplayCourseComponent,
    EditCourseComponent,
    GiveMarkComponent,
    GiveCommentComponent,
    StudentDashboardComponent,
    MarksTableComponent,
    CommentsTableComponent,
    ClassComponent,
    TransformPipe,
    WhitespacePipe,
    SearchComponent,
    SafePipe,
    SignupParentComponent,
    DisplayUserComponent,
    EditUserComponent,
    ParentDashboardComponent,
    MarksParentTableComponent,
    EditProfileComponent,
    SendMessageComponent,
    LocationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
