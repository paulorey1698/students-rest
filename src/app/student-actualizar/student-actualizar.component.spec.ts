import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActualizarComponent } from './student-actualizar.component';

describe('StudentActualizarComponent', () => {
  let component: StudentActualizarComponent;
  let fixture: ComponentFixture<StudentActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
