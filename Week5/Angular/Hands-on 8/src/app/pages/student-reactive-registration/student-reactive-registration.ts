import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-student-reactive-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-reactive-registration.html',
  styleUrl: './student-reactive-registration.css'
})
export class StudentReactiveRegistration {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      alert('Reactive Form Submitted Successfully!');
      console.log(this.registrationForm.value);
    }
  }
}