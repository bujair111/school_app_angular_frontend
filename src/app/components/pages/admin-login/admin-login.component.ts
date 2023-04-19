import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  msg: string = ''
  
      // injecting service from LoginService 
  constructor(private loginService: LoginService, private router: Router){}

submit(formData: NgForm){
  // calling service function 
  this.loginService.adminLogin(formData).subscribe((res:{ statusCode:  number, token: string, adminId: number }) =>{
    // response
    console.log(res)
      if(res.statusCode == 201){
      // redirect
      localStorage.setItem('token',res.token)
      localStorage.setItem('adminId',res.adminId.toString())
      this.router.navigateByUrl('/admin/home')
      }
      else if(res.statusCode == 403){
        this.msg = 'username or password incorrect'
      }
      else{
      this.msg = 'something went wrong '
      }
  })
}

ngOnInit(){
  if(!!localStorage.getItem('token') == true){
    setTimeout(() => {
      this.router.navigateByUrl('/admin/home')
    }, 1000);
  }

}
}
