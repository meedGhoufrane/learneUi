import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnerHomeComponent } from './pages/learner-home/learner-home.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    LearnerHomeComponent,
    CourseDetailComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
