import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChurchMember} from "../classes/ChurchMember";
import {DataMemberService} from "../services/data.member.service";
import {SacramentMeeting} from "../classes/SacramentMeeting";
import {Hymn} from "../classes/Hymn";
import {DataHymnService} from "../services/data.hymn.service";

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
  hymns: Hymn[]=[];
  sacramentHymn: Hymn;
  sacramentMeeting: SacramentMeeting= new SacramentMeeting();

  constructor(private _formBuilder: FormBuilder,
              private dataMemberService: DataMemberService,
              private dataHymnService: DataHymnService,) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.loadMembers();
    this.loadHymns();
  }

  loadMembers(){
    this.dataMemberService.getMembers().subscribe(
      data=> {this.members = data;
      }
    );
  }

  loadHymns(){
    this.dataHymnService.getHymns().subscribe(
      data=> {this.hymns = data;
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
