import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddTeacherComponent } from './components/pages/add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './components/pages/view-teacher/view-teacher.component';
import { ViewStudentComponent } from './components/pages/view-student/view-student.component';
import { AdminHomeComponent } from './components/pages/admin-home/admin-home.component';

import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';

import { MaterialModule } from 'src/app/material/material.module';
// import { CommonFooterComponent } from 'src/app/shared/modules/components/common-footer/common-footer.component';
import { AddStaffComponent } from './components/pages/add-staff/add-staff.component';
import { AddClassComponent } from './components/pages/add-class/add-class.component';
import { AddSalaryComponent } from './components/pages/add-salary/add-salary.component';
import { AddFeesComponent } from './components/pages/add-fees/add-fees.component';
import { AssignTeacherComponent } from './components/pages/assign-teacher/assign-teacher.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    AddTeacherComponent,
    ViewTeacherComponent,
    ViewStudentComponent,
    AdminHomeComponent,
    AdminNavComponent,
    AdminSidebarComponent,
    // CommonFooterComponent,
    AddStaffComponent,
    AddClassComponent,
    AddSalaryComponent,
    AddFeesComponent,
    AssignTeacherComponent


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModuleModule,
    FormsModule

  ]
})
export class AdminModule { }
