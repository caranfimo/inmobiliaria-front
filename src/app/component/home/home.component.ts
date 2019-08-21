import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  private _theme:boolean;


  set theme( theme:boolean ){
    this._theme = theme;
    if(theme){
      localStorage.setItem('theme', true.toString());
    }else{
      localStorage.removeItem('theme');
    }
  }
   
  get theme(){
    return this._theme
  }

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    const theme =  localStorage.getItem('theme');
    if(theme){
      this.theme = true;
    }
  }

  endSession(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
