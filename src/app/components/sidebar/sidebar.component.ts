import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() chapters: any[] = []; // Initialize with an empty array
  @Output() chapterSelected = new EventEmitter<any>();

  selectChapter(chapter: any) {
    this.chapterSelected.emit(chapter);
  }
}
