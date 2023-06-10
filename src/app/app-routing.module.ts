import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { TeacherDashbordComponent } from './components/teacher-dashbord/teacher-dashbord.component';
import { DiplayCourseComponent } from './components/diplay-course/diplay-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { GiveMarkComponent } from './components/give-mark/give-mark.component';
import { GiveCommentComponent } from './components/give-comment/give-comment.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ClassesComponent } from './components/classes/classes.component';
import { AboutComponent } from './components/about/about.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { SearchComponent } from './components/search/search.component';
import { SignupParentComponent } from './components/signup-parent/signup-parent.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ParentDashboardComponent } from './components/parent-dashboard/parent-dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"signupStudent", component:SignupStudentComponent},
  {path:"signupTeacher", component:SignupTeacherComponent},
  {path:"signupAdmin", component:SignupAdminComponent},
  {path:"signupParent", component:SignupParentComponent},
  {path:"login", component:LoginComponent},
  {path:"adminDashboard", component:AdminDashboardComponent},
  {path:"addCourse", component:AddCourseComponent},
  {path:"displayStudent/:id", component:StudentInfoComponent},
  {path:"displayUser/:id", component:DisplayUserComponent},
  {path:"teacherDashboard", component:TeacherDashbordComponent},
  {path:"displayCourse/:id", component:DiplayCourseComponent},
  {path:"editCourse/:id", component:EditCourseComponent},
  {path:"editUser/:id", component:EditUserComponent},
  {path:"editProfile/:id", component:EditProfileComponent},
  {path:"giveMark/:id/:tel", component:GiveMarkComponent},
  {path:"giveComment/:id", component:GiveCommentComponent},
  {path:"studentDashboard", component:StudentDashboardComponent},
  {path:"parentDashboard", component:ParentDashboardComponent},
  {path:"classes", component:ClassesComponent},
  {path:"about", component:AboutComponent},
  {path:"teachers", component:TeachersComponent},
  {path:"searchCourse", component:SearchComponent},
  {path:"searchLocation", component:LocationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
