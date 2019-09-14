import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckMaintenanceComponent } from './truck-maintenance.component';

describe('TruckMaintenanceComponent', () => {
  let component: TruckMaintenanceComponent;
  let fixture: ComponentFixture<TruckMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
