import { Component, OnInit } from '@angular/core';
import {Topic} from "../classes/Topic";
import {DataTopicService} from "../services/data.topic.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-Topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})

export class TopicComponent implements OnInit {

  topic: Topic = new Topic();
  currentPage: number = 1;
  topics: Topic[];

  constructor(private data: DataTopicService,
              private dialog: MatDialog) {
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
      data => {this.topics = data;
      });
  }

  onSubmit() {
    if(this.topic.name!=null){
      this.save();
    }else{
      this.dialog.open(DialogComponent, {data: {title:"Warning", text:"Please, fill the form", secondButton: false}});
    }
  }

  delete(topic: Topic){
    this.data.deleteTopic(topic.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

  deleteDialog(topic: Topic){
    let dialogRef = this.dialog.open(DialogComponent, {data:{title: "Are you sure?", text:"do you really want to delete this Topic?", secondButton: true}});
    dialogRef.afterClosed().subscribe(result => {
      if(result=="true"){
        this.delete(topic);
      }
    });
  }

}
