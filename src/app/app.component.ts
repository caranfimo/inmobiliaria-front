import { Component } from '@angular/core';
import { StateManagerService } from './services/state-manager.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontn2n';

  private _theme:boolean;

  constructor( private state:StateManagerService ){

  }


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

}
