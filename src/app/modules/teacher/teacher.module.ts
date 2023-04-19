import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { THomeComponent } from './components/pages/t-home/t-home.component';
import { THeaderComponent } from './components/t-header/t-header.component';
import { AddStudentsComponent } from './components/pages/add-students/add-students.component';
import { ViewStudentsComponent } from './components/pages/view-students/view-students.component';
import { AddMarksComponent } from './components/pages/add-marks/add-marks.component';
import { ApproveLeaveComponent } from './components/pages/approve-leave/approve-leave.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TNavbarComponent } from './components/t-navbar/t-navbar.component';
import { TSidebarComponent } from './components/t-sidebar/t-sidebar.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { ViewProfileComponent } from './components/pages/view-profile/view-profile.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherComponent,
    THomeComponent,
    THeaderComponent,
    AddStudentsComponent,
    ViewStudentsComponent,
    AddMarksComponent,
    ApproveLeaveComponent,
    TNavbarComponent,
    TSidebarComponent,
    ViewProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    SharedModuleModule,
    FormsModule
  ]
})
export class TeacherModule { }
