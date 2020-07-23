import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable, of} from 'rxjs';
import {ChurchMember} from "../classes/ChurchMember";
import {delay} from "rxjs/operators";
import {Attendance} from "../classes/Attendance";

@Injectable({
  providedIn: 'root'
})

export class DataAttendanceService {

  private baseUrl = 'https://bma-b.herokuapp.com/attendances';
  // private baseUrl = 'http://localhost:8080/attendances';

  constructor(private http: HttpClient) {   }

  getAttendances(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getOrCreateAttendances(): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/creates`,null);
  }

  getAttendanceById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveAttendance(attendance: Attendance): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, attendance);
  }

  saveAttendances(attendances: Attendance[]): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/mul`, attendances);
  }

  updateAttendances(attendances: Attendance[]): Observable<any> {
    return this.http.put(`${this.baseUrl}` + `/mul`, attendances);
  }
  deleteAttendance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateAttendance(id: number, attendance: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, attendance);
  }

}
