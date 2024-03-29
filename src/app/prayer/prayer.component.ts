import { Component, OnInit } from '@angular/core';
import {DataMemberService} from "../services/data.member.service";
import {ChurchMember} from "../classes/ChurchMember";
import {Prayer} from "../classes/Prayer";
import {DataPrayerService} from "../services/data.prayer.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-discourse',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.scss']
})

export class PrayerComponent implements OnInit {

  prayer: Prayer = new Prayer();
  prayers: Prayer[]= [];
  members: ChurchMember[]= [];


  currentPage: number = 1;

  constructor(private dataPrayerService: DataPrayerService,
              private dataMemberService: DataMemberService,
              private dialog: MatDialog) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.dataPrayerService.savePrayer(this.prayer).subscribe(
      data => this.loadData(),
      info => console.log(info));
      this.prayer = new Prayer();
  }

  delete(prayer: Prayer){
    this.dataPrayerService.deletePrayer(prayer.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

  deleteDialog(prayer: Prayer){
    let dialogRef = this.dialog.open(DialogComponent, {data:{title: "Are you sure?", text:"do you really want to delete this prayer?", secondButton: true}});
    dialogRef.afterClosed().subscribe(result => {
      if(result=="true"){
        this.delete(prayer);
      }
    });
  }

  loadData() {
    this.loadMembers();
    this.loadPrayers();
  }

  loadPrayers(){
    this.dataPrayerService.getPrayers().subscribe(
      data=> {this.prayers = data;
      }
    );
  }

  loadMembers(){
    this.dataMemberService.getMembers().subscribe(
      data=> {this.members = data;
      }
    );
    console.debug(this.members);
  }

  onSubmit() {
    if(this.prayer.churchMember!=null){
      this.save();
    }else{
      this.dialog.open(DialogComponent, {data: {title:"Warning", text:"Please, fill the form", secondButton: false}});
    }
    this.loadPrayers();
    this.prayer = new Prayer();
  }

}
