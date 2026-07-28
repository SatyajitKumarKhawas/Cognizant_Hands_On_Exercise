import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
  };

  @Output()
  enrollRequested = new EventEmitter<number>();

}