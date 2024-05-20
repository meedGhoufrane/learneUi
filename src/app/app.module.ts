// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // Import PdfViewerModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnerHomeComponent } from './pages/learner-home/learner-home.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnerHomeComponent,
    CourseDetailComponent,
    CoursesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule // Add PdfViewerModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
