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

  constructor(private data: DataOrganizationService, public dialog: MatDialog) {
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
      this.openDialog();
      // alert("Please fill the form");
    }
  }

  delete(organization: Organization){
    this.data.deleteOrganization(organization.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

  openDialog(){
    this.dialog.open(DialogComponent);
  }

}
