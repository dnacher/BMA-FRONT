import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Attendance} from "../classes/Attendance";
import {Hymn} from "../classes/Hymn";

@Injectable({
  providedIn: 'root'
})

export class DataAttendanceServiceold {

  private baseUrl = 'http://localhost:8080/attendances';

  constructor(private http: HttpClient) {   }

  getAttendances(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getAttendanceById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveAttendance(attendance: Attendance): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, attendance);
  }

  deleteAttendance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateAttendance(id: number, attendance: any): Observable<any> {
    console.log(id);
    console.log("here");
    console.log(attendance);
    attendance = this.http.delete(`${this.baseUrl}/${id}`);
    console.log("after");
    console.log(attendance);
    return attendance;
  }

}
