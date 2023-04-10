import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './components/pages/admin-home/admin-home.component';
import { AddTeacherComponent } from './components/pages/add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './components/pages/view-teacher/view-teacher.component';
import { AddClassComponent } from './components/pages/add-class/add-class.component';

import { AddStaffComponent } from './components/pages/add-staff/add-staff.component';
import { AddSalaryComponent } from './components/pages/add-salary/add-salary.component';

import { ViewStudentComponent } from './components/pages/view-student/view-student.component';
import { AssignTeacherComponent } from './components/pages/assign-teacher/assign-teacher.component';

const routes: Routes = [
{ path: '', component: AdminComponent,
  children:[
    {path:'home',component:AdminHomeComponent},
    {path: '', component: AdminHomeComponent},
    {path:'add-teacher',component:AddTeacherComponent},
    {path:'view-teacher',component:ViewTeacherComponent},
    {path:'view-student',component:ViewStudentComponent},
    {path:'add-calss',component:AddClassComponent},
    {path:'add-staff',component:AddStaffComponent},
    {path:'add-salry',component:AddSalaryComponent},
    {path:'assign-teacher',component:AssignTeacherComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
