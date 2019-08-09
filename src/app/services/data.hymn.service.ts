import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Hymn} from "../classes/Hymn";

@Injectable({
  providedIn: 'root'
})

export class DataHymnService {

  private baseUrl = 'http://localhost:8080/hymns';

  constructor(private http: HttpClient) {   }

  getHymns(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getHymnsById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveHymn(hymn: Hymn): Observable<Hymn> {
    return this.http.post(`${this.baseUrl}` + `/`, hymn);
  }

  deleteHymn(id: number): Observable<Hymn> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateHymn(id: number, hymn: any): Observable<Hymn> {
    return this.http.put(`${this.baseUrl}/${id}`, hymn);
  }

}
