import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-home',
  templateUrl: './t-home.component.html',
  styleUrls: ['./t-home.component.css']
})
export class THomeComponent {

  constructor(private router:Router){}
  teacher : any
  ngOnInit(){
this.teacher = localStorage.getItem('teacher_name') 

  }

  logout(){
    
    localStorage.clear()
    this.router.navigateByUrl('/home')

  }
}
