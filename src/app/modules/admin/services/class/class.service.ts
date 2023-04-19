import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  baseUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  addClass(formData: any): Observable<any>{
return this.http.post(this.baseUrl + 'school/admin/addclass',formData)

  }

  getClasses(): Observable<any>{
    return this.http.get(this.baseUrl + 'school/admin/class/list')
  }

  deleteClass(id: number): Observable<any>{

    return this.http.delete(this.baseUrl + 'school/admin/class/delete/'+id)
    
  }
}
