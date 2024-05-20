import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courses = [
    { 
      id: 1, 
      title: 'Course 1', 
      description: 'Description for course 1', 
      chapters: [
        { title: 'Chapter 1', content: 'Content for chapter 1', pdfUrl: 'assets/chapter1.pdf' },
        { title: 'Chapter 2', content: 'Content for chapter 2', pdfUrl: 'assets/chapter2.pdf' },
        { title: 'Chapter 3', content: 'Content for chapter 3', pdfUrl: 'assets/chapter3.pdf' }
      ]
    },
    { 
      id: 2, 
      title: 'Course 2', 
      description: 'Description for course 2', 
      chapters: [
        { title: 'Chapter 1', content: 'Content for chapter 1', pdfUrl: 'assets/chapter1.pdf' },
        { title: 'Chapter 2', content: 'Content for chapter 2', pdfUrl: 'assets/chapter2.pdf' },
        { title: 'Chapter 3', content: 'Content for chapter 3', pdfUrl: 'assets/chapter3.pdf' }
      ]
    },
    { 
      id: 3, 
      title: 'Course 3', 
      description: 'Description for course 3', 
      chapters: [
        { title: 'Chapter 1', content: 'Content for chapter 1', pdfUrl: 'assets/chapter1.pdf' },
        { title: 'Chapter 2', content: 'Content for chapter 2', pdfUrl: 'assets/chapter2.pdf' },
        { title: 'Chapter 3', content: 'Content for chapter 3', pdfUrl: 'assets/chapter3.pdf' }
      ]
    }
  ];

  selectedCourse: any;
  selectedChapter: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = +params.get('id')!; // Non-null assertion operator
      this.selectedCourse = this.courses.find(course => course.id === courseId);
      this.selectedChapter = this.selectedCourse?.chapters[0]; // Use optional chaining
    });
  }

  onChapterSelect(chapter: any) {
    this.selectedChapter = chapter;
  }
}
