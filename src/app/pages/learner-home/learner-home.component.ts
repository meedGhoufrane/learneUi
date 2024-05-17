// src/app/pages/learner-home/learner-home.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-home',
  templateUrl: './learner-home.component.html',
  styleUrls: ['./learner-home.component.css']
})
export class LearnerHomeComponent implements OnInit {
  courses = [
    { id: 1, title: 'Course 1', description: 'Description for course 1' },
    { id: 2, title: 'Course 2', description: 'Description for course 2' },
    { id: 3, title: 'Course 3', description: 'Description for course 3' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
