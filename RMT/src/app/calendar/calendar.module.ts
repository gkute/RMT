import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { VacationRequestsComponent } from './vacation-requests/vacation-requests.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';


@NgModule({
  declarations: [ScheduleComponent, VacationRequestsComponent, ViewRequestsComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
