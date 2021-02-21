import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { StudentService } from '../student.service'
import { Student } from '../Student'

@Component({
  selector: 'app-student-listado',
  templateUrl: './student-listado.component.html',
  styleUrls: ['./student-listado.component.css']
})
export class StudentListadoComponent implements OnInit {
  students: Observable<Student[]>
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData()
  }
  reloadData() {
    this.students = this.studentService.getListaStudents()
  }
  editarStudent(id: number) {
    this.router.navigate(['actualizar', id])
  }
  eliminarStudent(id: number) {
    this.studentService.eliminarStudent(id).subscribe(data => {
      console.log(data)
      this.reloadData()
    }, error => console.log(error)
    )
  }
  verStudent(id: number) {
    this.router.navigate(['detalles', id])
  }

}
