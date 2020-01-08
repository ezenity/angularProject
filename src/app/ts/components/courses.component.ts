import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: '../../html/courses.component.html'
})

export class CoursesComponent {
  title = 'The title of courses page';
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
