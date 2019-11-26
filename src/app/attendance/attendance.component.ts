import { Component, OnInit } from '@angular/core';
import {Attendance} from "../classes/Attendance";
import {DataMemberService} from "../services/data.member.service";
import {DataAttendanceService} from "../services/data.attendance.service";


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  attendances: Array<Attendance> = [];
  currentPage: number = 1;
  loading: boolean=true;

  constructor(private dataMemberService: DataMemberService,private dataAttendanceService: DataAttendanceService) {
    this.loadMembers();
  }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers(){
    this.dataAttendanceService.getOrCreateAttendances().subscribe(
      data => {
        this.attendances = data;
      }
    );
  }

  toggleAttendance(attendance: Attendance, e){
    attendance.attended = e.target.checked;
  }

  SendAttendance(){
    console.log(this.attendances);
    if(this.attendances[0].id!=null){
      this.dataAttendanceService.updateAttendances(this.attendances).subscribe(
        data => this.loadMembers(),
        info => console.log(info));
    }else{
      this.dataAttendanceService.saveAttendances(this.attendances).subscribe(
        data => this.loadMembers(),
        info => console.log(info));
    }
    // this.dataAttendanceService.saveAttendanceList(this.attendances);

  }
}
