import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { CourseCard } from './course-card';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockCourse = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    duration: 45,
    fee: 5000
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCard]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

    component.course = mockCourse;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {

    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(h3.textContent).toContain('Data Structures');

  });

  it('should emit enrollRequested when button is clicked', () => {

    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.click();

    expect(emitSpy).toHaveBeenCalledWith(1);

  });

  it('should call enroll() when button is clicked', () => {

    const enrollSpy = vi.spyOn(component, 'enroll');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.click();

    expect(enrollSpy).toHaveBeenCalled();

  });

  it('should call ngOnChanges', () => {

    const logSpy = vi.spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });

    expect(logSpy).toHaveBeenCalled();

  });

});