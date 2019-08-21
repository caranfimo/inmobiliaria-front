import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  selected:number;
  filter:number = 1;

  name:string;

  constructor() { }

  ngOnInit() {
  }

}
