import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface ViewElements {
  checked: boolean;
  item: string;

}

const ELEMENT_DATA: ViewElements[] = [
  { checked: false, item: 'Fuel' }, { checked: false, item: 'Def' }, { checked: false, item: 'Dash Gauges' },
  { checked: false, item: 'Heat & A/C' }, { checked: false, item: 'Air Pressure' },
  { checked: false, item: 'Power Steering' }, { checked: false, item: 'Windshield Wipers' },
  { checked: false, item: 'Seat Belts' }, { checked: false, item: 'Accountability' },
  { checked: false, item: 'Tablet' }, { checked: false, item: 'Portable Radios' },
  { checked: false, item: 'Truck Radios' }, { checked: false, item: 'Lights/Sirens' },
  { checked: false, item: 'Thermal Imaging' }, { checked: false, item: 'Headlights' },
  { checked: false, item: 'Turn Signal' }, { checked: false, item: 'Cascade System' },
  { checked: false, item: 'Rit Bag' }, { checked: false, item: 'Generator' }, { checked: false, item: 'Water Jug' },
  { checked: false, item: 'Scba' }, { checked: false, item: 'Air Bottles x 13' },
  { checked: false, item: 'Flashlights x 7' }, { checked: false, item: 'Oil Dry x 4' },
  { checked: false, item: 'Hand Tools' }, { checked: false, item: 'Tires' }, { checked: false, item: 'Initials' }];

@Component({
  selector: 'app-truck-maintenance',
  templateUrl: './truck-maintenance.component.html',
  styleUrls: ['./truck-maintenance.component.css']
})
export class TruckMaintenanceComponent implements OnInit {



  startingMiles = new FormControl('', [Validators.required]);
  endingMiles = new FormControl('', [Validators.required]);
  startingHours = new FormControl('', [Validators.required]);
  endingHours = new FormControl('', [Validators.required]);
  startingGen = new FormControl('', [Validators.required]);
  endingGen = new FormControl('', [Validators.required]);
  startingCascade = new FormControl('', [Validators.required]);
  endingCascade = new FormControl('', [Validators.required]);
  totalMiles = new FormControl('', [Validators.required]);
  totalHours = new FormControl('', [Validators.required]);
  totalFuel = new FormControl('', [Validators.required]);
  totalGenHours = new FormControl('', [Validators.required]);
  totalCascadeHours = new FormControl('', [Validators.required]);


  displayedColumns: string[] = ['checked', 'item'];
  dataSource = new MatTableDataSource<ViewElements>(ELEMENT_DATA);

  getErrorMessage() {
    return this.startingMiles.hasError('required') ? 'Please Enter Starting Miles!' :
      this.endingMiles.hasError('required') ? 'Please Enter Ending Miles!' :
        this.startingHours.hasError('required') ? 'Please Enter Starting Hours!' :
          this.endingHours.hasError('required') ? 'Please Enter Ending Hours!' :
            this.startingGen.hasError('required') ? 'Please Enter Starting Gen Hours!' :
              this.endingGen.hasError('required') ? 'Please Enter Ending Gen Hours!' :
                this.startingCascade.hasError('required') ? 'Please Enter Starting Cascade!' :
                  this.endingCascade.hasError('required') ? 'Please Enter Ending Cascade!' :
                    this.totalMiles.hasError('required') ? 'Please Enter Total Miles!' :
                      this.totalHours.hasError('required') ? 'Please Enter Total Hours!' :
                        this.totalFuel.hasError('required') ? 'Please Enter Total Fuel!' :
                          this.totalGenHours.hasError('required') ? 'Please Enter Total Gen Hours!' :
                            this.totalCascadeHours.hasError('required') ? 'Please Enter Total Cascade Hours!' : '';
  }

  ngOnInit() {
  }

}
