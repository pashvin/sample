import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root',
})
export class LangService {
    private lang = "English";

    constructor(private translate: TranslateService) {

    }

    public set currentLanguage(value:string) {
        this.lang = value;
        this.translate.use(value === 'English' ? 'messages':'messages.es');
    }

    public get currentLanguage(): string {
        return this.lang;
    }
}