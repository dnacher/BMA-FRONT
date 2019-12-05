import { Component, OnInit } from '@angular/core';
import {Attendance} from "../classes/Attendance";
import {DataMemberService} from "../services/data.member.service";
import {DataAttendanceService} from "../services/data.attendance.service";
import {NgxSpinnerService} from "ngx-spinner";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  attendances: Array<Attendance> = [];
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(private dataMemberService: DataMemberService,
              private dataAttendanceService: DataAttendanceService,
              private spinnerService: NgxSpinnerService) {
    this.loadMembers();
  }

  ngOnInit() {
    this.loadMembers();
    this.spinnerService.show();
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

  SendAttendance() {
    this.isLoading = true;
    this.spinnerService.show();
    if (this.attendances[0].id != null) {
      this.dataAttendanceService.updateAttendances(this.attendances).subscribe(
        //to remove the error on console.log -> npm install @types/node --save-dev
        // You may also need to explicitly include the node typedefs in your tsconfig.json like so: "types": ["node"]
        data => {
          this.loadMembers(), info => console.log(info);
          this.isLoading = false;
          this.spinnerService.hide();
        });
    } else {
      this.dataAttendanceService.saveAttendances(this.attendances).subscribe(
        data => {
          this.loadMembers(), info => console.log(info);
          this.isLoading = false;
          this.spinnerService.hide();
        });
      // this.dataAttendanceService.saveAttendanceList(this.attendances);
    }
  }
}
