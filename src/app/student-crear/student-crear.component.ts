import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {StudentService} from '../student.service'
import {Student} from '../Student'

@Component({
  selector: 'app-student-crear',
  templateUrl: './student-crear.component.html',
  styleUrls: ['./student-crear.component.css']
})
export class StudentCrearComponent implements OnInit {
  student: Student = new Student()
  enviado=false
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  nuevoStudent():void{
    this.enviado=false
    this.student= new Student();
  }
  verListado(){
    this.router.navigate(['/students'])
  }
  onSubmit(){
    this.enviado=true
    this.guardarStudent()
  }
  guardarStudent(){
    this.studentService.crearStudent(this.student).subscribe(
      data=>{
        console.log(data)
        this.student=new Student()
        this.verListado()
      },
      error => console.log(error)
    )
  }

}
