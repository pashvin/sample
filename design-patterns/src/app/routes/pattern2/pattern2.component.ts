import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-pattern2',
  templateUrl: './pattern2.component.html',
  styleUrls: ['./pattern2.component.scss']
})
export class Pattern2Component implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  run() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        this.logger.addLog('Singleton works, both variables contain the same instance.');
    } else {
      this.logger.addLog('Singleton failed, variables contain different instances.');
    }
  }

}

class Singleton {
  private static instance: Singleton;

  // make constructor private
  private constructor() { }

  // expose method which can call constructor but once
  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }
      return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
      // ...
  }
}