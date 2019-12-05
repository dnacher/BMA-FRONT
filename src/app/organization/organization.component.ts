import { Component, OnInit } from '@angular/core';
import {Organization} from "../classes/Organization";
import {DataOrganizationService} from "../services/data.organization.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-Topic',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})

export class OrganizationComponent implements OnInit {

  organization: Organization = new Organization();
  currentPage: number = 1;
  organizations: Organization[];

  constructor(private data: DataOrganizationService,
              private dialog: MatDialog) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.data.saveOrganization(this.organization).subscribe(
      data => this.loadData(),
      info => console.log(info));
      this.loadData();
    this.organization = new Organization();
  }

  loadData() {
    this.data.getOrganizations().subscribe(
      data => {this.organizations = data;
      });
  }

  onSubmit() {
    if(this.organization.name!=null){
      this.save();
    }else{
      this.dialog.open(DialogComponent, {data: {title:"Warning", text:"Please, fill the form", secondButton: false}});
    }
  }

  deleteDialog(organization: Organization){
    let dialogRef = this.dialog.open(DialogComponent, {data:{title: "Are you sure?", text:"do you really want to delete this organization?", secondButton: true}});
    dialogRef.afterClosed().subscribe(result => {
      if(result=="true"){
        this.delete(organization);
      }
    });
  }

  delete(organization: Organization){
    this.data.deleteOrganization(organization.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

}
