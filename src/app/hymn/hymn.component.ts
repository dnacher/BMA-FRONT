import { Component, OnInit } from '@angular/core';
import {Hymn} from "../classes/Hymn";
import {DataHymnService} from "../services/data.hymn.service";

@Component({
  selector: 'app-hymn',
  templateUrl: './hymn.component.html',
  styleUrls: ['./hymn.component.scss']
})

export class HymnComponent implements OnInit {


  hymn: Hymn = new Hymn();
  currentPage: number = 1;
  hymns: Hymn[];

  constructor(private data: DataHymnService) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.data.saveHymn(this.hymn).subscribe(
      data => this.loadData(),
      info => console.log(info));
      this.loadData();
    this.hymn = new Hymn();
  }

  loadData() {
    this.data.getHymns().subscribe(
      data => {this.hymns = data;});
  }

  onSubmit() {
    if(this.hymn.title!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }

  }

}
