import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
imports: [CommonModule, CourseCard]
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
showCourses = true;
 courses = [
  {
    id: 1,
    name: 'Angular',
    code: 'ANG101',
    credits: 4,
    duration: 45,
    fee: 12000,
    startDate: new Date('2026-08-01')
  },
  {
    id: 2,
    name: 'Java',
    code: 'JAVA201',
    credits: 3,
    duration: 60,
    fee: 15000,
    startDate: new Date('2026-08-10')
  },
  {
    id: 3,
    name: 'Spring Boot',
    code: 'SPR301',
    credits: 4,
    duration: 40,
    fee: 18000,
    startDate: new Date('2026-08-20')
  },
  {
    id: 4,
    name: 'React',
    code: 'RE101',
    credits: 2,
    duration: 35,
    fee: 10000,
    startDate: new Date('2026-09-01')
  },
  {
    id: 5,
    name: 'SQL',
    code: 'SQL101',
    credits: 3,
    duration: 30,
    fee: 8000,
    startDate: new Date('2026-09-15')
  }
];

  selectedCourseId = 0;

  onEnroll(id: number) {
    console.log('Enrolling in', id);
    this.selectedCourseId = id;
  }

}