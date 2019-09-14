import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterRoutingModule } from './roster-routing.module';
import { CrewComponent } from './crew/crew.component';


@NgModule({
  declarations: [CrewComponent],
  imports: [
    CommonModule,
    RosterRoutingModule
  ]
})
export class RosterModule { }
