import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReactiveRegistration } from './student-reactive-registration';

describe('StudentReactiveRegistration', () => {
  let component: StudentReactiveRegistration;
  let fixture: ComponentFixture<StudentReactiveRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentReactiveRegistration],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentReactiveRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
