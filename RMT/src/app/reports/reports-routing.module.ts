import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmsKitComponent } from './ems-kit/ems-kit.component';
import { TruckMaintenanceComponent } from './truck-maintenance/truck-maintenance.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'truck-maintenance', pathMatch: 'full'
  },
  {
    path: 'truck-maintenance',
    component: TruckMaintenanceComponent
  },
  {
    path: 'ems-kit',
    component: EmsKitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
