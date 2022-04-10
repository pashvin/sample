import { Component, Input, OnInit } from '@angular/core';
import { TrackerService } from '../service/tracker.service';

@Component({
  selector: 'hit-target',
  templateUrl: './hit-target.component.html',
  styleUrls: ['./hit-target.component.scss'],
})
export class HitTargetComponent implements OnInit {
  @Input() currentIndex: string = '';

  isActive = false;

  constructor(private trackerService: TrackerService) {}

  ngOnInit(): void {
    this.subscribeForDrawEvent();
  }

  private subscribeForDrawEvent() {
    this.trackerService.getDrawEventNotifier.subscribe((num) => {
      if (this.currentIndex === num + '') {
        this.isActive = true;
        
        // clear the active status 10 milli-second before
        // so if the same circle selected again, then user
        // see it is a next draw and can click and claim 
        // the target.
        setTimeout((_:any) => {
          this.isActive = false;
        }, 990);
      } else {
        this.isActive = false;
      }
    });
  }

  onUserClick() {
    if (this.isActive) {
      this.trackerService.scoreUp();
      // avoid scoring more than once after it is acive.
      this.isActive = false;
    } else {
      this.trackerService.scoreDown();
    }
  }
}
