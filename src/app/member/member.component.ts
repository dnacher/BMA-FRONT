import { Component, OnInit } from '@angular/core';
import {Member} from "../classes/Member";
import { DataMemberService} from "../services/data.member.service";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {


  member: Member = new Member();
  currentPage: number = 1;
  members: Member[];

  constructor(private data: DataMemberService) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }

  save() {
    this.data.saveMember(this.member).subscribe(
      data => this.loadData(),
      info => console.log(info));
      this.loadData();
    this.member = new Member();
  }

  loadData() {
    this.data.getMembers().subscribe(
      data => {this.members = data;});
  }

  onSubmit() {
    if(this.member.name!=null && this.member.surname!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }
  }

  delete(member: Member){
    this.data.deleteMember(member.id).subscribe(
      data => this.loadData(),
      info => console.log(info));
    this.loadData();
  }

}
