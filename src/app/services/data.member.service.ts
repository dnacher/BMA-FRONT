import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable, of} from 'rxjs';
import {ChurchMember} from "../classes/ChurchMember";

@Injectable({
  providedIn: 'root'
})

export class DataMemberService {

  private baseUrl = 'https://bma-b.herokuapp.com/members';
  // private baseUrl = 'http://localhost:8080/members';
  constructor(private http: HttpClient) {   }

  getMembers(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getMemberById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveMember(member: ChurchMember): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/`, member);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateMember(id: number, member: ChurchMember): Observable<any> {
    return this.http.put(`${this.baseUrl}` + `/${id}`, member);
  }

}
