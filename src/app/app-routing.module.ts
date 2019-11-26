import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailAuthorComponent } from './detail-author/detail-author.component';
import { IndexComponent } from '../app/index/index.component'
import {HymnComponent} from "./hymn/hymn.component";
import {MemberComponent} from "./member/member.component";
import {DiscourseComponent} from "./discourse/discourse.component";
import {AttendanceComponent} from "./attendance/attendance.component";
import {TopicComponent} from "./topic/topic.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'author/:id',
    component: DetailAuthorComponent
  },
  {
    path: 'hymns',
    component: HymnComponent
  },
  {
    path: 'members',
    component: MemberComponent
  },
  {
    path: 'discourses',
    component: DiscourseComponent
  },
  {
    path: 'attendances',
    component: AttendanceComponent
  },
  {
    path: 'topics',
    component: TopicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
