import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-pattern3',
  templateUrl: './pattern3.component.html',
  styleUrls: ['./pattern3.component.scss']
})
export class Pattern3Component implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  run() {
    let calendar: ICalendar;
    calendar = new MSOffice();
    this.logger.addLog(calendar.getList().toString());
    calendar = new GoogleWorkspace();
    this.logger.addLog(calendar.getList().toString());
  }

}

interface ICalendar {
  getList():string[];
}

class MSOffice implements ICalendar {
  public getList(): string[] {
    return ['List from MS Office calendar'];
  }
}

class GoogleWorkspace implements ICalendar {
  public getList(): string[] {
    return ['List from GoogleWorkspace calendar'];
  }
}

