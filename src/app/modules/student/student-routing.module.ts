import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ViewProfileComponent } from './components/pages/view-profile/view-profile.component';
import { ApplyLeaveComponent } from './components/pages/apply-leave/apply-leave.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { ViewMarksComponent } from './components/pages/view-marks/view-marks.component';

const routes: Routes = [
  { path: '', component: StudentComponent,
  children:[
    { path: '', component: HomeComponent},
    {path:'home',component:HomeComponent },
    {path:'view-profile',component:ViewProfileComponent},
    {path:'apply-leave',component:ApplyLeaveComponent},
    {path:'change-password',component:ChangePasswordComponent},
    {path:'view-mark',component:ViewMarksComponent}


  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
