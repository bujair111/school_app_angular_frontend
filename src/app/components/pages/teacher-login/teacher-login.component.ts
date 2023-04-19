import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent {
msg =''

constructor(private loginService: LoginService, private router: Router){}

  submit(formData: NgForm){
    console.log(formData)
    this.loginService.teacherLogin(formData).subscribe((res:{ statusCode: number, msg: string, token: string, teacherId: number, teacherName: string}) =>{
      console.log(res)

      if(res.statusCode == 201){
        localStorage.setItem('teacher_id',res.teacherId.toString())
        localStorage.setItem('token',res.token)
        localStorage.setItem('teacher_name',res.teacherName)
        this.router.navigateByUrl('/teacher/home') 
        this.msg = res.msg
      }
      else if(res.statusCode == 404){
        this.msg = res.msg
      }
      else{
      this.msg = res.msg
      }
    })

  }


  ngOnInit(){

    if(!!localStorage.getItem('token') == true){

      setTimeout(() => {
        this.router.navigateByUrl('/teacher/home')
      }, 1000);
     
    }

  }
}
