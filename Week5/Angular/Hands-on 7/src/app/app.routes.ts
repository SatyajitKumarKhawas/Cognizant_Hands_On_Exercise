import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { StudentRegistration } from './pages/student-registration/student-registration';
import { StudentReactiveRegistration } from './pages/student-reactive-registration/student-reactive-registration';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'courses',
    component: CourseList
  },

  {
    path: 'register',
    component: StudentRegistration
  },

  {
    path: 'reactive-register',
    component: StudentReactiveRegistration
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: '**',
    component: NotFound
  }

];