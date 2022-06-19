import { Component } from '@angular/core';
import { LangService } from './lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})

export class AppComponent {
  title = 'local';

  constructor(public langService: LangService) {}

  public set currentLanguage(value: string) {
    this.langService.currentLanguage = value;;
  }

  public get currentLanguage(): string {
    return this.langService.currentLanguage;
  }

  public onSelectionChange(e: any) {
    this.currentLanguage = e.target.value;
  }
}
