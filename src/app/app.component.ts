import { Component } from '@angular/core';
import { NgScormPlayerService } from 'ng-scorm-player'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public player:NgScormPlayerService){

  }

  open = true;


  title = 'scorm-raper';
// player = this._NgScormPlayerService;
  urlDirOfSco = '../assets/demo/';
  urlLaunchPage = ''
  scormResult:any;

  ngOnInit() {
    this.player.initializeEvent.subscribe(val => { console.log('initializeEvent:', val); });
    this.player.setValueEvent.subscribe(val => { console.log('setValueEvent:', val); }); 
    this.player.getValueEvent.subscribe(val => { console.log('getValueEvent:', val); });
    this.player.finishEvent.subscribe(val => { console.log('finishEvent:', val); }); 
    this.player.commitEvent.subscribe(val => { console.log('commitEvent:', val); });
 
  }


}
