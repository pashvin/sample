import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
    private lang = "English";

    public set currentLanguage(value:string) {
        this.lang = value;
    }

    public get currentLanguage(): string {
        return this.lang;
    }
}