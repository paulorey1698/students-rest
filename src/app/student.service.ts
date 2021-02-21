import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'https://jordanegs.xyz/student';
  constructor(private http: HttpClient) { }
  getStudent(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/find/' + id)
  }
  getListaStudents(): Observable<any> {
    return this.http.get(this.baseUrl + '/all')
  }
  crearStudent(student: object): Observable<object> {
    return this.http.post(this.baseUrl + '/new', student)
  }
  actualizarStudent(student: object): Observable<object> {
    return this.http.put(this.baseUrl + '/edit', student)
  }
  eliminarStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
