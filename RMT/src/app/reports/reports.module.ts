import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { EmsKitComponent } from './ems-kit/ems-kit.component';
import { TruckMaintenanceComponent } from './truck-maintenance/truck-maintenance.component';


@NgModule({
  declarations: [EmsKitComponent, TruckMaintenanceComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
