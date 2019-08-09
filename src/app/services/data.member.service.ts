import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable, of} from 'rxjs';
import {Member} from "../classes/Member";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class DataMemberService {

  private baseUrl = 'http://localhost:8080/members';

  constructor(private http: HttpClient) {   }

  getMembers(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/');
  }

  getMemberById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${id}`);
  }

  saveMember(member: Member): Observable<Member> {
    return this.http.post(`${this.baseUrl}` + `/`, member);
  }

  deleteMember(id: number): Observable<Member> {
    return this.http.delete(`${this.baseUrl}` + `/${id}`);
  }

  updateMember(id: number, member: any): Observable<Member> {
    return this.http.put(`${this.baseUrl}/${id}`, member);
  }

}
