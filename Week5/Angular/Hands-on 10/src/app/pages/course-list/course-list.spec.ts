import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { CourseList } from './course-list';
import { CourseService } from '../../services/course';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const initialState = {
    course: {
      selectedCourseId: 0
    }
  };

  const mockCourses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      duration: 30,
      fee: 5000
    },
    {
      id: 2,
      name: '.NET',
      code: 'NET101',
      credits: 5,
      duration: 40,
      fee: 6000
    }
  ];

  const mockCourseService = {
    getCourses: vi.fn(() => ({
      subscribe: (callback: any) => callback(mockCourses)
    }))
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({
          initialState
        }),
        {
          provide: CourseService,
          useValue: mockCourseService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load courses on ngOnInit', () => {

    component.ngOnInit();

    expect(component.courses.length).toBe(2);
    expect(mockCourseService.getCourses).toHaveBeenCalled();

  });

  it('should dispatch action when enrolling', () => {

    const dispatchSpy = vi.spyOn(store, 'dispatch');

    component.onEnroll(1);

    expect(dispatchSpy).toHaveBeenCalled();

  });

  it('should update selectedCourseId', () => {

    component.selectedCourseId = 5;

    expect(component.selectedCourseId).toBe(5);

  });

});