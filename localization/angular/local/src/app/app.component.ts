import { Component } from '@angular/core';
import { LangService } from './lang.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'local';

  constructor(public langService: LangService, private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.onLangChange.subscribe((change) => {
      console.log('langChange', change);
    });
  }

  public set currentLanguage(value: string) {
    this.langService.currentLanguage = value;
  }

  public get currentLanguage(): string {
    return this.langService.currentLanguage;
  }

  public onSelectionChange(e: any) {
    this.currentLanguage = e.target.value;
  }
}
