import { Component, OnInit } from '@angular/core';
import {Calling} from "../classes/Calling";
import {DataCallingService} from "../services/data.calling.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-Topic',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss']
})

export class CallingComponent implements OnInit {

  calling: Calling = new Calling();
  currentPage: number = 1;
  callings: Calling[];

  constructor(private data: DataCallingService,
              private dialog: MatDialog) {
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
      this.dialog.open(DialogComponent, {data: {title:"Warning", text:"Please, fill the form", secondButton: false}});
    }
  }

  deleteDialog(calling: Calling){
    let dialogRef = this.dialog.open(DialogComponent, {data:{title: "Are you sure?", text:"do you really want to delete this calling?", secondButton: true}});
    dialogRef.afterClosed().subscribe(result => {
      if(result=="true"){
        this.delete(calling);
      }
    });
  }

  delete(calling: Calling){
    this.data.deleteCalling(calling.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

}
