import { Component, OnInit } from '@angular/core';
import {Discourse} from "../classes/Discourse";
import {DataDiscourseService} from "../services/data.discourse.service";
import {DataMemberService} from "../services/data.member.service";
import {Member} from "../classes/Member";
import { DatePipe } from '@angular/common';


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
  currentPage: number = 1;

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

  delete(discourse: Discourse){
    this.dataDiscourseService.deleteDiscourse(discourse.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

  loadData() {
    this.loadMembers();
    this.loadDiscourses();
  }

  loadDiscourses(){
    this.dataDiscourseService.getDiscourses().subscribe(
      data=> {this.discourses = data;
      }
    );
  }

  loadMembers(){
    this.dataMemberService.getMembers().subscribe(
      data=> {this.members = data;
      }
    );
  }

  onSubmit() {
    this.save();
    this.loadDiscourses();
    this.discourse = new Discourse();
  }


}
