import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Calling} from "../classes/Calling";

@Injectable({
  providedIn: 'root'
})

export class DataCallingService {

  private baseUrl = 'https://bma-back.herokuapp.com/callings';

  constructor(private http: HttpClient) {   }

  getCallings(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getCallingById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveCalling(calling: Calling): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, calling);
  }

  deleteCalling(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateCalling(id: number, calling: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, calling);
  }

}
