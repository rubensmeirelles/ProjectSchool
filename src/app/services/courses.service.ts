import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course } from '@app/shared/models/Course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl = `${environment.apiUrl}courses`;
  private http = inject(HttpClient);

  public getCoursesById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`$(this.baseUrl}/${id}`)
  }
}
