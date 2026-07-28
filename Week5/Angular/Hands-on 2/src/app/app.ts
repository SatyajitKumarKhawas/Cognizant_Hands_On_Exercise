import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home, CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'StudentCoursePortal';
}