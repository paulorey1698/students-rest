import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCrearComponent } from './student-crear.component';

describe('StudentCrearComponent', () => {
  let component: StudentCrearComponent;
  let fixture: ComponentFixture<StudentCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
