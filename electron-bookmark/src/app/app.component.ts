import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electron-bookmark';
  

  openWindow(event:Event) {
debugger;

    const mainWin = (<any>window).require('electron').ipcRenderer;

    mainWin.invoke('some-name', '').then((result:any) => {
      result + '';
    })
    
    debugger;
   
  }
}
