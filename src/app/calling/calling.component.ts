import { Component, OnInit } from '@angular/core';
import {Calling} from "../classes/Calling";
import {DataCallingService} from "../services/data.calling.service";

@Component({
  selector: 'app-hymn',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss']
})

export class CallingComponent implements OnInit {


  calling: Calling = new Calling();

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
      data => {this.calling = data;});
  }

  onSubmit() {
    if(this.calling.name!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }

  }

}
