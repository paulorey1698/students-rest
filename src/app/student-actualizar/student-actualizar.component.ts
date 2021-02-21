import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Student } from '../Student'
import { StudentService } from '../student.service'

@Component({
  selector: 'app-student-actualizar',
  templateUrl: './student-actualizar.component.html',
  styleUrls: ['./student-actualizar.component.css']
})
export class StudentActualizarComponent implements OnInit {
  id: number
  student: Student
  enviado = false
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.student = new Student()
    this.id = this.route.snapshot.params['id']
    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data.message;
      }, error => console.log(error))
  }
  onSubmit() {
    this.enviado = true
    this.updateStudent()
  }
  updateStudent() {
    this.studentService.actualizarStudent(this.student)
      .subscribe(data => {
        console.log(data)
        this.student = new Student()
        this.verListado()

      }, error => console.log(error))
  }
  verListado() {
    this.router.navigate(['/students'])
  }


}
