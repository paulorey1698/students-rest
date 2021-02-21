import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetallesComponent } from './student-detalles.component';

describe('StudentDetallesComponent', () => {
  let component: StudentDetallesComponent;
  let fixture: ComponentFixture<StudentDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
