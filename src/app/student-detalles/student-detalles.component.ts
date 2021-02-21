import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { StudentService } from '../student.service'
import { Student } from '../Student'

@Component({
  selector: 'app-student-detalles',
  templateUrl: './student-detalles.component.html',
  styleUrls: ['./student-detalles.component.css']
})
export class StudentDetallesComponent implements OnInit {
  id: number
  student: Student
  constructor(private route:ActivatedRoute,
    private router:Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.student=new Student()
    this.id=this.route.snapshot.params['id']
    this.studentService.getStudent(this.id).subscribe(
      data=>{
        console.log(data)
        this.student=data.message;
      },error=>console.log(error)
    )
  }
  verListado(){
    this.router.navigate(['/students'])
  }

}
