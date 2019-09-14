import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', loadChildren: '../app/calendar/calendar.module#CalendarModule' },
  { path: 'reports', loadChildren: '../app/reports/reports.module#ReportsModule' },
  { path: 'roster', loadChildren: '../app/roster/roster.module#RosterModule' },
  // { path: 'administration', loadChildren: '../app/administration/administration.module#Administration' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
