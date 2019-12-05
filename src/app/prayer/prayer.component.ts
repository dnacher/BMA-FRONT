import { Component, OnInit } from '@angular/core';
import {DataMemberService} from "../services/data.member.service";
import {ChurchMember} from "../classes/ChurchMember";
import {Prayer} from "../classes/Prayer";
import {DataPrayerService} from "../services/data.prayer.service";

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

  constructor(private dataPrayerService: DataPrayerService, private dataMemberService: DataMemberService) {
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
  }

  onSubmit() {
    if(this.prayer.churchMember!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }
    this.loadPrayers();
    this.prayer = new Prayer();
  }

}
