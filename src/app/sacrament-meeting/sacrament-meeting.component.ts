import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChurchMember} from "../classes/ChurchMember";
import {DataMemberService} from "../services/data.member.service";
import {SacramentMeeting} from "../classes/SacramentMeeting";
import {Hymn} from "../classes/Hymn";
import {DataHymnService} from "../services/data.hymn.service";
import {Discourse} from "../classes/Discourse";
import {DataDiscourseService} from "../services/data.discourse.service";
import {Prayer} from "../classes/Prayer";
import {DataPrayerService} from "../services/data.prayer.service";
import {DataSacramentMeetingService} from "../services/data.sacrament-meeting.service";

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
  discourses: Discourse[]= [];
  discourse: Discourse;
  endingPrayer: Prayer;
  beginningPrayer: Prayer;
  prayers: Prayer[] = [];

  constructor(private _formBuilder: FormBuilder,
              private dataMemberService: DataMemberService,
              private dataHymnService: DataHymnService,
              private dataDiscourseService: DataDiscourseService,
              private dataPrayerService: DataPrayerService,
              private dataSacramentMeetingService: DataSacramentMeetingService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.loadMembers();
    this.loadHymns();
    this.loadDiscourses();
    this.loadPrayers();
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

  loadDiscourses(){
    this.dataDiscourseService.getDiscourses().subscribe(
      data=> {this.discourses = data;
      }
    );
  }

  loadPrayers(){
    this.dataPrayerService.getPrayers().subscribe(
      data=> {this.prayers = data;
      }
    );
  }


  addPreside(){
    this.sacramentMeeting.preside = this.member;
  }

  addLead(){
    this.sacramentMeeting.lead = this.member;
  }

  addHymn(){
    this.sacramentMeeting.hymns.push(this.sacramentHymn)
  }

  addDiscourse(){
    this.sacramentMeeting.discourses.push(this.discourse)
  }

  deleteDiscourse(discourse: Discourse){
    let ind = this.sacramentMeeting.discourses.indexOf(discourse);
    this.sacramentMeeting.discourses.splice(ind,1);
  }

  save(){
    if(this.sacramentMeeting!=null){
      this.dataSacramentMeetingService.saveSacramentMeeting(this.sacramentMeeting);
    }

  }

}
