import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {SacramentMeeting} from "../classes/SacramentMeeting";

@Injectable({
  providedIn: 'root'
})

export class DataSacramentMeetingService {

  private baseUrl = 'https://bma-back.herokuapp.com/sacrament_meetings';

  constructor(private http: HttpClient) {   }

  getSacramentMeetings(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getSacramentMeetingById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveSacramentMeeting(sacramentMeeting: SacramentMeeting): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, sacramentMeeting);
  }

  deleteSacramentMeeting(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateSacramentMeeting(id: number, sacramentMeeting: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, sacramentMeeting);
  }

}
