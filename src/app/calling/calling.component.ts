import { Component, OnInit } from '@angular/core';
import {Calling} from "../classes/Calling";
import {DataCallingService} from "../services/data.calling.service";

@Component({
  selector: 'app-Topic',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss']
})

export class CallingComponent implements OnInit {

  calling: Calling = new Calling();
  currentPage: number = 1;
  callings: Calling[];

  constructor(private data: DataCallingService) {
    this.loadData();
  }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.data.saveCalling(this.calling).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
    this.calling = new Calling();
  }

  loadData() {
    this.data.getCallings().subscribe(
      data => {this.callings = data;
      });
  }

  onSubmit() {
    if(this.calling.name!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }
  }

  delete(calling: Calling){
    this.data.deleteCalling(calling.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

}
