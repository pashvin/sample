import { Component, OnInit } from "@angular/core";
import { LoggerService } from "src/app/service/logger.service";

@Component({
  selector: "app-pattern4",
  templateUrl: "./pattern4.component.html",
  styleUrls: ["./pattern4.component.scss"],
})
export class Pattern4Component implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}

  run() {
    this.logger.addLog(
      new Factory(eCalendarType.GOOGLE).getInstance().getList().toString()
    );
    this.logger.addLog(
      new Factory(eCalendarType.MS).getInstance().getList().toString()
    );
  }
}

interface ICalendar {
  getList(): string[];
}

enum eCalendarType {
  MS,
  GOOGLE,
}

class MSOffice implements ICalendar {
  public getList(): string[] {
    return ["List from MS Office calendar"];
  }
}

class GoogleWorkspace implements ICalendar {
  public getList(): string[] {
    return ["List from GoogleWorkspace calendar"];
  }
}

class Factory {
  constructor(private type: eCalendarType) {}
  getInstance(): ICalendar {
    if (this.type === eCalendarType.MS) {
      return new MSOffice();
    } else {
      return new GoogleWorkspace();
    }
  }
}
