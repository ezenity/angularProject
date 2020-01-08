import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  templateUrl: '../html/courses.component.html'
})

export class CoursesComponent {
  title = 'The title of courses page';
  courses = ['Course1', 'Course2', 'Course3'];
}
