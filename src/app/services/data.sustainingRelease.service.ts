import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {SustainingRelease} from "../classes/SustainingRelease";

@Injectable({
  providedIn: 'root'
})

export class DataSustainingReleaseServiceService {

  private baseUrl = 'https://bma-back.herokuapp.com/sustaining_releases';

  constructor(private http: HttpClient) {   }

  getSustainingReleases(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getSustainingReleaseById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveSustainingRelease(sustainingRelease: SustainingRelease): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, sustainingRelease);
  }

  deleteSustainingRelease(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateSustainingRelease(id: number, sustainingRelease: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, sustainingRelease);
  }

}
