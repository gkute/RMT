import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { VacationRequestsComponent } from './vacation-requests/vacation-requests.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'schedule', pathMatch: 'full'
  },
  {
    path: 'schedule', component: ScheduleComponent
  },
  {
    path: 'vacation-request',
    component: VacationRequestsComponent
  },
  {
    path: 'view-requests',
    component: ViewRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
