import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListadoComponent } from './student-listado.component';

describe('StudentListadoComponent', () => {
  let component: StudentListadoComponent;
  let fixture: ComponentFixture<StudentListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
