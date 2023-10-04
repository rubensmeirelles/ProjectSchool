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

  public get(): Observable<Course[]> {
    return this.http.get<Course[]>(`$(this.baseUrl}`)
  }

  public getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`$(this.baseUrl}/${id}`)
  }

  public post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`$(this.baseUrl}`, course)
  }

  public put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`$(this.baseUrl}/${id}`, course)
  }

  public delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`$(this.baseUrl}/${id}`)
  }
}
