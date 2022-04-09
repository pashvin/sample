import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerComponent } from './logger/logger.component';
import { SelectorComponent } from './selector/selector.component';
import { PatternsComponent } from './patterns/patterns.component';
import { Pattern1Component } from './routes/pattern1/pattern1.component';
import { Pattern2Component } from './routes/pattern2/pattern2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    SelectorComponent,
    PatternsComponent,
    Pattern1Component,
    Pattern2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
