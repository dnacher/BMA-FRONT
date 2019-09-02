import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Prayer} from "../classes/Prayer";

@Injectable({
  providedIn: 'root'
})

export class DataPrayerService {

  private baseUrl = 'https://bma-back.herokuapp.com/prayers';

  constructor(private http: HttpClient) {   }

  getPrayers(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getPrayerById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  savePrayer(prayer: Prayer): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, prayer);
  }

  deletePrayer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updatePrayer(id: number, prayer: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, prayer);
  }

}
