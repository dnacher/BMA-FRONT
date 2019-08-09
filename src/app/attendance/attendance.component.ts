import { Component, OnInit } from '@angular/core';
import {Attendance} from "../classes/Attendance";
import {Member} from "../classes/Member";
import {DataMemberService} from "../services/data.member.service";
import {consoleTestResultHandler} from "tslint/lib/test";

@Component({
  selector: 'app-detail-author',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  attendances: Array<Attendance> = [];

  constructor(private dataMemberService: DataMemberService) {
    this.loadMembers();
  }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers(){
    this.dataMemberService.getMembersTest().subscribe(
      data=> {this.attendances = data;
      }
    );
  }

  toggleAttendance(attendance: Attendance, e){
    attendance.attended = e.target.checked;
  }

}
