import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

// creating a new service url to backend
adminLogin(formData: any): Observable<any>{
    
    return this.http.post(this.baseUrl +'school/admin/login', formData)
  }

teacherLogin(formData: any): Observable<any>{

  return this.http.post(this.baseUrl + 'teacher/login', formData)
}
}
