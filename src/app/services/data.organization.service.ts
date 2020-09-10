import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Organization} from "../classes/Organization"

@Injectable({
  providedIn: 'root'
})

export class DataOrganizationService {

  // private baseUrl = 'https://bma-b.herokuapp.com/organizations';
  private baseUrl = 'http://localhost:8080/organizations';
  constructor(private http: HttpClient) {   }

  getOrganizations(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getOrganizationById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveOrganization(organization: Organization): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, organization);
  }

  deleteOrganization(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateOrganization(id: number, topic: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, topic);
  }

}
