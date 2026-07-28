import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  showCourses = true;

  courses: any[] = [];

  selectedCourseId = 0;

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  onEnroll(id: number) {
    console.log('Enrolling in', id);
    this.selectedCourseId = id;
  }

}