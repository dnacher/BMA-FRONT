import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/index/index.component'
import {HymnComponent} from "./hymn/hymn.component";
import {MemberComponent} from "./member/member.component";
import {DiscourseComponent} from "./discourse/discourse.component";
import {AttendanceComponent} from "./attendance/attendance.component";
import {TopicComponent} from "./topic/topic.component";
import {CallingComponent} from "./calling/calling.component";
import {PrayerComponent} from "./prayer/prayer.component";
import {OrganizationComponent} from "./organization/organization.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
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
    path: 'callings',
    component: CallingComponent
  },
  {
    path: 'prayers',
    component: PrayerComponent
  },
  {
    path: 'attendances',
    component: AttendanceComponent
  },
  {
    path: 'organizations',
    component: OrganizationComponent
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
