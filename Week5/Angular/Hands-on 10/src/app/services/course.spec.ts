import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { CourseService } from './course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

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

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all courses', () => {

    service.getCourses().subscribe(courses => {

      expect(courses.length).toBe(2);

      expect(courses).toEqual(mockCourses);

    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

  it('should handle http error', () => {

    service.getCourses().subscribe({

      next: () => fail('Expected an error'),

      error: (error) => {

        expect(error.status).toBe(500);

      }

    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    req.flush(
      'Server Error',
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    );

  });

});