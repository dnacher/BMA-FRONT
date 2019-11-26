import { Component, OnInit } from '@angular/core';
import {Topic} from "../classes/Topic";
import {DataTopicService} from "../services/data.topic.service";

@Component({
  selector: 'app-Topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})

export class TopicComponent implements OnInit {

  topic: Topic = new Topic();
  currentPage: number = 1;
  topics: Topic[];

  constructor(private data: DataTopicService) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.data.saveTopic(this.topic).subscribe(
      data => this.loadData(),
      info => console.log(info));
      this.loadData();
    this.topic = new Topic();
  }

  loadData() {
    this.data.getTopics().subscribe(
      data => {this.topics = data;});
  }

  onSubmit() {
    if(this.topic.name!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }
  }

  delete(topic: Topic){
    this.data.deleteTopic(topic.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

}
