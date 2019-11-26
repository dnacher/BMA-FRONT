import { Component, OnInit } from '@angular/core';
import {Discourse} from "../classes/Discourse";
import {DataDiscourseService} from "../services/data.discourse.service";
import {DataMemberService} from "../services/data.member.service";
import {DataTopicService} from "../services/data.topic.service";
import {ChurchMember} from "../classes/ChurchMember";
import {Topic} from "../classes/Topic";


@Component({
  selector: 'app-discourse',
  templateUrl: './discourse.component.html',
  styleUrls: ['./discourse.component.scss']
})

export class DiscourseComponent implements OnInit {

  discourse: Discourse = new Discourse();
  discourses: Discourse[]= [];
  mr: ChurchMember= new ChurchMember();
  members: ChurchMember[]= [];
  topics: Topic[]=[];

  currentPage: number = 1;

  constructor(private dataDiscourseService: DataDiscourseService, private dataMemberService: DataMemberService, private dataTopicService: DataTopicService) {
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
    this.loadTopics();
  }

  loadDiscourses(){
    this.dataDiscourseService.getDiscourses().subscribe(
      data=> {this.discourses = data;
      }
    );
  }

  loadTopics(){
    this.dataTopicService.getTopics().subscribe(
      data => {this.topics = data}
    )
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
