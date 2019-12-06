import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HymnComponent} from "./hymn/hymn.component";
import {HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MemberComponent} from "./member/member.component";
import {DiscourseComponent} from "./discourse/discourse.component";
import {CallingComponent} from "./calling/calling.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {AttendanceComponent} from "./attendance/attendance.component";
import {NgxPaginationModule} from 'ngx-pagination';
import {TopicComponent} from "./topic/topic.component";
import {PrayerComponent} from "./prayer/prayer.component";
import {OrganizationComponent} from "./organization/organization.component";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './dialog/dialog.component';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HymnComponent,
    MemberComponent,
    IndexComponent,
    DiscourseComponent,
    CallingComponent,
    AttendanceComponent,
    TopicComponent,
    PrayerComponent,
    OrganizationComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    NgxPaginationModule,
    MatDialogModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
