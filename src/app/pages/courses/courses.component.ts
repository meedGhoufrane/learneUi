import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1' },
    { id: 2, title: 'Course 2', description: 'Description of Course 2' },
    { id: 3, title: 'Course 3', description: 'Description of Course 3' }
  ];
}
