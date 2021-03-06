import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electron-bookmark';
  private mainElectronWnd = (<any>window).electron;

  constructor() {}

  openWindowGoogle(event: Event) {
    this.mainElectronWnd
      .doAction('https://www.google.com')
      .then((result: any) => {
        console.log(result);
      });
  }

  openWindowCNN(event: Event) {
    this.mainElectronWnd
      .doAction('https://www.cnn.com')
      .then((result: any) => {
        console.log(result);
      });
  }
}
