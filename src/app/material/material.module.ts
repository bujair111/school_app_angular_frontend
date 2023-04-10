import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



const materialComponents=[
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
  ],
  exports:[
    materialComponents
   ]
})
export class MaterialModule { }
