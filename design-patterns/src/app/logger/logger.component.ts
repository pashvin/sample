import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../service/logger.service";

@Component({
  selector: "app-logger",
  templateUrl: "./logger.component.html",
  styleUrls: ["./logger.component.scss"],
})
export class LoggerComponent implements OnInit {

  constructor(public logger: LoggerService) {}

  ngOnInit(): void {
    
  }

  get logItems() : string[] {
    return this.logger.logEntries;
  }

  clearLog() : void {
    this.logger.clearLog();
  }
}
