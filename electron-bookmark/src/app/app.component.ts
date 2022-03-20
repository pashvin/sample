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
    const electron = (<any>window).require('electron');
    const remote = electron.BrowserWindow.getAllWindows()[0];
    
    electron.dialog.showMessageBox (remote, {
      type: "warning",
      message: "You have been warned.",
      buttons: ["OK"]
    });
  }
}
