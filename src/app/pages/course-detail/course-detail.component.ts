import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course = {
    id: 1,
    title: 'Course 1',
    description: 'Detailed description for course 1',
    chapters: [
      { title: 'Chapter 1', content: 'Content for chapter 1', pdfUrl: 'assets/chapter1.pdf' },
      { title: 'Chapter 2', content: 'Content for chapter 2', pdfUrl: 'assets/chapter2.pdf' },
      { title: 'Chapter 3', content: 'Content for chapter 3', pdfUrl: 'assets/chapter3.pdf' }
    ]
  };

  selectedChapter: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.selectedChapter = this.course.chapters[0]; // Default to the first chapter
    // Fetch course details using courseId if needed
  }

  onChapterSelect(chapter: any) {
    this.selectedChapter = chapter;
  }
}
