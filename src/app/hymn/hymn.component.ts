import { Component, OnInit } from '@angular/core';
import {Hymn} from "../classes/Hymn";
import {DataHymnService} from "../services/data.hymn.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-hymn',
  templateUrl: './hymn.component.html',
  styleUrls: ['./hymn.component.scss']
})

export class HymnComponent implements OnInit {


  hymn: Hymn = new Hymn();
  currentPage: number = 1;
  hymns: Hymn[];

  constructor(private data: DataHymnService,
              private dialog: MatDialog) {
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
      this.dialog.open(DialogComponent, {data: {title:"Warning", text:"Please, fill the form", secondButton: false}});
    }
  }

  deleteDialog(hymn: Hymn){
    let dialogRef = this.dialog.open(DialogComponent, {data:{title: "Are you sure?", text:"do you really want to delete this hymn?", secondButton: true}});
    dialogRef.afterClosed().subscribe(result => {
      if(result=="true"){
        this.delete(hymn);
      }
    });
  }

  delete(hymn: Hymn){
    this.data.deleteHymn(hymn.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

}
