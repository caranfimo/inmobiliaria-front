import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss']
})
export class EstatesComponent implements OnInit {

  realEstates = []
  filterEstates = []
  @Input() name:String;

  constructor(private api: ApiService, public dialog: MatDialog, private router:Router) {
    this.api.getRealEstates().subscribe(res => {
      this.realEstates = res.list;
      this.filterEstates = this.realEstates.map(value => value)
    })
  }

  deleteRealEstate(id: string, index: number) {
    this.api.deleteRealEstate(id).subscribe(res => {
      this.openDialog('check_circle', res.message);
      this.realEstates.splice(index, 1);
    },
      err => {
        console.log(err);
        this.openDialog('error', err.message);
      })
  }

  redirectTo(id:string){
    this.router.navigate([`pwa/estates/detail/${id}`]);
  }

  filterByName(){
    this.filterEstates = this.realEstates.filter(value => {
      if(value.name.toUpperCase().includes( this.name.toUpperCase())){
        return value
      }
    })
  }

  openDialog(icon: string, message: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { icon, message }
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      if (curVal != prevVal) {
        this.filterByName()
      }
    }
  }

}
