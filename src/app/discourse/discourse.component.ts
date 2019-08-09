import { Component, OnInit } from '@angular/core';
import {Discourse} from "../classes/Discourse";
import {DataDiscourseService} from "../services/data.discourse.service";
import {DataMemberService} from "../services/data.member.service";
import {Member} from "../classes/Member";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-discourse',
  templateUrl: './discourse.component.html',
  styleUrls: ['./discourse.component.scss']
})

export class DiscourseComponent implements OnInit {

  discourse: Discourse = new Discourse();
  discourses: Discourse;
  mr: Member= new Member();
  members: Member[]= [];
  selectedMember: Member;

  constructor(private dataDiscourseService: DataDiscourseService, private dataMemberService: DataMemberService) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.dataDiscourseService.saveDiscourse(this.discourse).subscribe(
      data => this.loadData(),
      info => console.log(info));
      this.discourse = new Discourse();
  }

  loadData() {
    this.dataMemberService.getMembers().subscribe(
      data=> {this.members = data;
        console.log(this.members);
      }
    );
  }



  onSubmit() {
    this.save();
    // if(this.discourse.member.name!=null){
    //   this.save();
    // }else{
    //   alert("Please fill the form");
    // }

  }


}
