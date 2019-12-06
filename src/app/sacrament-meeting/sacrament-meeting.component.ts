import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChurchMember} from "../classes/ChurchMember";
import {DataMemberService} from "../services/data.member.service";
import {SacramentMeeting} from "../classes/SacramentMeeting";

@Component({
  selector: 'app-sacrament-meeting',
  templateUrl: './sacrament-meeting.component.html',
  styleUrls: ['./sacrament-meeting.component.scss']
})
export class SacramentMeetingComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  member: ChurchMember;
  members: ChurchMember[]= [];
  sacramentMeeting: SacramentMeeting= new SacramentMeeting();

  constructor(private _formBuilder: FormBuilder,
              private dataMemberService: DataMemberService,) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.loadMembers();
  }

  loadMembers(){
    this.dataMemberService.getMembers().subscribe(
      data=> {this.members = data;
      }
    );
  }


  addPreside(){
    this.sacramentMeeting.preside = this.member;
  }

  addLead(){
    this.sacramentMeeting.lead = this.member;
  }

}
