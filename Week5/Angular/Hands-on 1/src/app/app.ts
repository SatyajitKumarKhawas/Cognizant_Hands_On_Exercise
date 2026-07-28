import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'StudentCoursePortal';
}