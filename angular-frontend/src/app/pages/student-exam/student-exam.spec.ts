import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExam } from './student-exam';

describe('StudentExam', () => {
  let component: StudentExam;
  let fixture: ComponentFixture<StudentExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentExam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
