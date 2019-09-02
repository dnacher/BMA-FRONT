import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HymnComponent} from "./hymn/hymn.component";
import {HttpClientModule } from '@angular/common/http';
import { DetailAuthorComponent } from './detail-author/detail-author.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MemberComponent} from "./member/member.component";
import {DiscourseComponent} from "./discourse/discourse.component";
import {CallingComponent} from "./calling/calling.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {AttendanceComponent} from "./attendance/attendance.component";
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HymnComponent,
    MemberComponent,
    DetailAuthorComponent,
    IndexComponent,
    DiscourseComponent,
    CallingComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
