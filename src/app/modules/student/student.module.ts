import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ViewProfileComponent } from './components/pages/view-profile/view-profile.component';
import { ViewMarksComponent } from './components/pages/view-marks/view-marks.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { SHeaderComponent } from './components/s-header/s-header.component';
import { ApplyLeaveComponent } from './components/pages/apply-leave/apply-leave.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { SNavbarComponent } from './components/s-navbar/s-navbar.component';
import { SSidebarComponent } from './components/s-sidebar/s-sidebar.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    StudentComponent,
    HomeComponent,
    ViewProfileComponent,
    ViewMarksComponent,
    ChangePasswordComponent,
    SHeaderComponent,
    ApplyLeaveComponent,
    SNavbarComponent,
    SSidebarComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModuleModule,
    MaterialModule
  ]
})
export class StudentModule { }
