// src/app/components/sidebar/sidebar.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() chapters: any[] = [];
  @Output() chapterSelected = new EventEmitter<any>();

  selectChapter(chapter: any) {
    this.chapterSelected.emit(chapter);
  }
}
