import { Component, OnInit } from '@angular/core';
import {ChurchMember} from "../classes/ChurchMember";
import { DataMemberService} from "../services/data.member.service";
import {Organization} from "../classes/Organization";
import {Calling} from "../classes/Calling";
import {DataCallingService} from "../services/data.calling.service";
import {DataOrganizationService} from "../services/data.organization.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {


  member: ChurchMember = new ChurchMember();
  currentPage: number = 1;
  members: ChurchMember[];
  filterMembers: ChurchMember[]=[];
  organizations: Organization[];
  callings: Calling[];
  isUpdating: boolean = false;
  filterText: string= "";

  constructor(private dataMemberService: DataMemberService,
              private dataCallingService: DataCallingService,
              private dataOrganizationService: DataOrganizationService,
              private dialog: MatDialog) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    if(this.isUpdating){
      this.dataMemberService.updateMember(this.member.id,this.member).subscribe(
        data => this.loadData(),
        info => console.log(info));
      this.loadData();
      this.isUpdating = false;
    }else{
      this.dataMemberService.saveMember(this.member).subscribe(
        data => this.loadData(),
        info => console.log(info));
      this.loadData();
    }

    this.member = new ChurchMember();
  }

  loadData() {
    this.dataMemberService.getMembers().subscribe(
      dataMember => {this.members = dataMember;});

    this.dataCallingService.getCallings().subscribe(
      dataCalling => {this.callings = dataCalling});

    this.dataOrganizationService.getOrganizations().subscribe(
      dataOrganization => {this.organizations = dataOrganization}
    );
  }

  onSubmit() {
    if(this.member.name!=null && this.member.surname!=null){
      console.log(this.member.name);
      console.log(this.member.surname);
      console.log(this.member.organization);
      console.log(this.member.calling);

      this.save();
    }else{
      this.dialog.open(DialogComponent, {data: {title:"Warning", text:"Please, fill the form", secondButton: false}});
    }
  }

  delete(member: ChurchMember){
    this.dataMemberService.deleteMember(member.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

  deleteDialog(member: ChurchMember){
    let dialogRef = this.dialog.open(DialogComponent, {data:{title: "Are you sure?", text:"do you really want to delete this calling?", secondButton: true}});
    dialogRef.afterClosed().subscribe(result => {
      if(result=="true"){
        this.delete(member);
      }
    });
  }

  Search(){
    console.log(this.filterText);
    this.members = this.members.filter(member => {
       member.fullname.toLocaleLowerCase().match(this.filterText.toLocaleLowerCase());
    });
  }

  edit(member: ChurchMember){
    this.member = member;
    this.isUpdating = true;
  }

}
