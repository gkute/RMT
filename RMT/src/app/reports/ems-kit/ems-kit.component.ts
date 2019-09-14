import { Component, OnInit } from '@angular/core';

export interface ViewElements {
  checked: boolean;
  item: string;
  highlighted?: boolean;
  hovered?: boolean;
}

const ELEMENT_DATA: ViewElements[] = [
  { checked: false, item: 'Portable Suction' }, { checked: false, item: 'BVM Adult' }, { checked: false, item: 'BVM Child' },
  { checked: false, item: 'BVM Infant' }, { checked: false, item: 'Oral Airways' }, { checked: false, item: 'Nasal Airways' },
  { checked: false, item: 'Pocket Mask' }, { checked: false, item: '4v4 Gauze Pads (10)' }, { checked: false, item: 'Adhesive Tape(2)' },
  { checked: false, item: 'Shears' }, { checked: false, item: 'Lubricant' }, { checked: false, item: 'BP Cuff Adult' },
  { checked: false, item: 'BP Cuff Child' }, { checked: false, item: 'Stethiscope Adult' }, { checked: false, item: 'Stethiscope Child' },
  { checked: false, item: 'Penlight' }, { checked: false, item: 'Disposable Gloves' }, { checked: false, item: 'Baby Asprin' },
  { checked: false, item: 'Activated Charcoal' }, { checked: false, item: 'Instant Glucose' }, { checked: false, item: 'Epinephrine Auto Injector' },
  { checked: false, item: 'Copy of Protocols' }, { checked: false, item: 'Trauma Dressing(2)' }, { checked: false, item: 'Burn Sheet' },
  { checked: false, item: 'Ladder Splint(2)' }, { checked: false, item: 'Sam Splint(2)' }, { checked: false, item: 'Kling(8)' },
  { checked: false, item: 'Bite Stick' }, { checked: false, item: 'Triangular Bandage(4)' }, { checked: false, item: 'Ice Pack(2)' },
  { checked: false, item: 'Amonia Capsules' }, { checked: false, item: 'Insect Sting Swabs' }];

@Component({
  selector: 'app-ems-kit',
  templateUrl: './ems-kit.component.html',
  styleUrls: ['./ems-kit.component.css']
})
export class EmsKitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['checked', 'item'];
  dataSource = ELEMENT_DATA;

  highlight(element: ViewElements) {
    element.highlighted = !element.highlighted;
  }
}
