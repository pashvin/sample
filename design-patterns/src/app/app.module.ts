import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoggerComponent } from "./logger/logger.component";
import { SelectorComponent } from "./selector/selector.component";
import { PatternsComponent } from "./patterns/patterns.component";

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    SelectorComponent,
    PatternsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
