import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { selectCourse } from '../../store/course.actions';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: any[] = [];
  selectedCourseId = 0;

 constructor(
  private courseService: CourseService,
  private store: Store<any>
) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      console.log('Courses Loaded', data);
    });

   this.store.select((state: any) => state.course).subscribe((state) => {
  this.selectedCourseId = state.selectedCourseId;
});
  }

  onEnroll(id: number) {

    this.store.dispatch(selectCourse({ id }));

    console.log('Selected Course:', id);
  }
}