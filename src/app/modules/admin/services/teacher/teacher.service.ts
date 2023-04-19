import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  
  baseUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  addTeacher(formData :any): Observable<any>{
    return this.http.post(this.baseUrl+'school/admin/addteacher', formData)
  }

  
  loadTeachersList(): Observable<any>{
    return this.http.get(this.baseUrl + 'school/admin/teachers/list')
  }
}
