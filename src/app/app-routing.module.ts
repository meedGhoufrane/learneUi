// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnerHomeComponent } from './pages/learner-home/learner-home.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/learner-home', pathMatch: 'full' },
  { path: 'learner-home', component: LearnerHomeComponent },
  { path: 'courses/:id', component: CourseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
