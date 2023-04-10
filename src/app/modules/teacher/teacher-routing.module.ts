import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { THomeComponent } from './components/pages/t-home/t-home.component';
import { ViewStudentsComponent } from './components/pages/view-students/view-students.component';
import { AddStudentsComponent } from './components/pages/add-students/add-students.component';
import { ApproveLeaveComponent } from './components/pages/approve-leave/approve-leave.component';
import { AddMarksComponent } from './components/pages/add-marks/add-marks.component';
import { ViewProfileComponent } from './components/pages/view-profile/view-profile.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: TeacherComponent,
  children:[
    { path: '', component: THomeComponent },
    { path: 'home', component: THomeComponent },
    { path: 'view-student', component: ViewStudentsComponent },
    { path: 'add-student', component: AddStudentsComponent },
    { path: 'approve-leave', component: ApproveLeaveComponent },
    { path: 'add-mark', component: AddMarksComponent },
    { path: 'view-profile', component: ViewProfileComponent },
    { path: 'change-password', component: ChangePasswordComponent}

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
