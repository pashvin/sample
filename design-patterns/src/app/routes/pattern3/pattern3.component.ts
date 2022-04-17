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
    this.logger.addLog("Pending implementation")
  }

}

