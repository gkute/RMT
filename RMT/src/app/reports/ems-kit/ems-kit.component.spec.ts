import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsKitComponent } from './ems-kit.component';

describe('EmsKitComponent', () => {
  let component: EmsKitComponent;
  let fixture: ComponentFixture<EmsKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmsKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
