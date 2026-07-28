import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';

import { App } from './app';

@Component({
  template: ''
})
class DummyComponent {}

describe('App', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([
          { path: '', component: DummyComponent },
          { path: 'about', component: DummyComponent },
          { path: 'contact', component: DummyComponent }
        ])
      ]
    }).compileComponents();

  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(App);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();

  });

  it('should render app', () => {

    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    expect(fixture.nativeElement).toBeTruthy();

  });

});