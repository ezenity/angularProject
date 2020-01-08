import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css'],
})

export class AppComponent {
  title = 'Testing <h1> div';
}
