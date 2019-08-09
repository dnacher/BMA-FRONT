import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Discourse} from "../classes/Discourse";

@Injectable({
  providedIn: 'root'
})

export class DataDiscourseService {

  private baseUrl = 'http://localhost:8080/discourses';

  constructor(private http: HttpClient) {   }

  getDiscourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getDiscoursesById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveDiscourse(discourse: Discourse): Observable<Discourse> {
    return this.http.post(`${this.baseUrl}` + `/`, discourse);
  }

  deleteDiscourse(id: number): Observable<Discourse> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateDiscourse(id: number, discourse: any): Observable<Discourse> {
    return this.http.put(`${this.baseUrl}/${id}`, discourse);
  }

}
