import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private baseUrl = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient) {};

    public retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.baseUrl);
    }

    public retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.baseUrl}/${id}`);
    }

    public save(course: Course): Observable<Course> {
        if (course.id) {
            return this.httpClient.put<Course>(`${this.baseUrl}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(`${this.baseUrl}`, course);
        }
    }

    public deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
    }
   
}
