import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  selectedCourse: any;
  selectedChapter: any;

  courses = [
    {
      id: 1,
      title: 'Course 1',
      chapters: [
        { title: 'Chapter 1', pdfUrl: 'path/to/chapter1.pdf' },
        { title: 'Chapter 2', pdfUrl: 'path/to/chapter2.pdf' }
      ]
    },
    {
      id: 2,
      title: 'Course 2',
      chapters: [
        { title: 'Chapter 1', pdfUrl: 'path/to/chapter1.pdf' },
        { title: 'Chapter 2', pdfUrl: 'path/to/chapter2.pdf' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.selectedCourse = this.courses.find(course => course.id === courseId);
  }

  onChapterSelected(chapter: any) {
    this.selectedChapter = chapter;
  }
}
