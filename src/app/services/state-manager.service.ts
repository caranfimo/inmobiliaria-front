import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  private dataSource =  new BehaviorSubject<boolean>(false);
  data =this.dataSource.asObservable();

  updateState( data:boolean ):void{
    this.dataSource.next(data);
  }

  constructor() { }
}
