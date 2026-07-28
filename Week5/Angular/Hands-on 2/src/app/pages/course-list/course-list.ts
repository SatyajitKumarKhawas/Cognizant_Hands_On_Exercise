import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4 },
    { id: 2, name: 'Java', code: 'JAVA201', credits: 3 },
    { id: 3, name: 'Spring', code: 'SPR301', credits: 4 },
    { id: 4, name: 'React', code: 'RE101', credits: 2 },
    { id: 5, name: 'SQL', code: 'SQL101', credits: 3 }
  ];

  selectedCourseId = 0;

  onEnroll(id: number) {
    console.log('Enrolling in', id);
    this.selectedCourseId = id;
  }

}