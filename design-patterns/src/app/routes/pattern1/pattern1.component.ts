import { Component, OnInit } from "@angular/core";
import { Subject,take } from "rxjs";
import { LoggerService } from "../../service/logger.service";

@Component({
  selector: "app-pattern1",
  templateUrl: "./pattern1.component.html",
  styleUrls: ["./pattern1.component.scss"],
})
export class Pattern1Component implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}

  run() {
    let adp = new Adoptee(this.logger);
    adp.eventReceivedWithoutAdapter("<message><sender>John</sender></message");
    adp.eventReceivedWithAdapter("<message><sender>John</sender></message");
  }
}

// Pattern implementation

class Target {

  public $event = new Subject();

  eventReceived(data: string) {
    this.$event.next(data);
  }
}

class Adapter extends Target {
  private xmlToJson(data:string) {
    //Just assume this function converts data into JSON.
    // for demo we are retuning hard coded string
    let ret = {
      message: {
        sender:'John'
      }
    }
    return JSON.stringify(ret);
  }
  override eventReceived(data: string) {
    // convert data from xml to JSON
    super.eventReceived(this.xmlToJson(data));
  }
}

class Adoptee {

  private tg: Target;
  private tga: Adapter;

  constructor(private logger: LoggerService) {
    this.tg = new Target();
    this.tga = new Adapter();
    this.tg.$event.pipe(take(1)).subscribe(data=>{
      this.logger.addLog("Without Adapter data: " + data);
    });
    this.tga.$event.pipe(take(1)).subscribe(data=>{
      this.logger.addLog("With Adapter data: " + data);
    });
  }

  eventReceivedWithoutAdapter(data: string) {
    this.tg.eventReceived("<message><sender>John</sender></message");
  }

  eventReceivedWithAdapter(data: string) {
    this.tga.eventReceived("<message><sender>John</sender></message");
  }
}
