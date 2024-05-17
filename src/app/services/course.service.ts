// src/app/services/course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://your-api-url.com/api';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/courses`);
  }

  getCourseDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/courses/${id}`);
  }
}
