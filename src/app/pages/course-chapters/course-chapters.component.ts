// course-chapters.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-chapters',
  templateUrl: './course-chapters.component.html',
  styleUrls: ['./course-chapters.component.css']
})
export class CourseChaptersComponent implements OnInit {
  chapters = [
    { title: 'Chapter 1', pdfUrl: 'path_to_pdf_file_1.pdf' },
    { title: 'Chapter 2', pdfUrl: 'path_to_pdf_file_2.pdf' },
    // Add more chapters as needed
  ];

  selectedChapter: any;

  constructor() { }

  ngOnInit(): void {
    // Initialize with the first chapter
    this.selectedChapter = this.chapters[0];
  }

  selectChapter(chapter: any) {
    this.selectedChapter = chapter;
  }
}
