import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LangService } from './lang.service';

import { NgxTranslateModule } from './translete.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTranslateModule
  ],
  providers: [LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
