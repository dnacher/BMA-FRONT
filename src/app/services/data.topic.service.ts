import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Topic} from "../classes/Topic";

@Injectable({
  providedIn: 'root'
})

export class DataTopicService {

  private baseUrl = 'https://bma-b.herokuapp.com/topics';
  // private baseUrl = 'http://localhost:8080/topics';
  constructor(private http: HttpClient) {   }

  getTopics(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getTopicById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveTopic(topic: Topic): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, topic);
  }

  deleteTopic(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateTopic(id: number, topic: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, topic);
  }

}
