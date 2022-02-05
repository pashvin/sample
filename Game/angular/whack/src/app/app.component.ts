import { Component } from '@angular/core';
import { TrackerService} from './service/tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private trackerService : TrackerService) {
    
  }

  get totalTarget() :number {
    return this.trackerService.totalTargets;
  }

  get totalScore() : number {
    return this.trackerService.score;
  }

  get startstopTitle() : string {
    return this.trackerService.isGameActive ? 'Stop' : 'Start';
  }

  get isUserWon() : boolean {
    return this.trackerService.isUserWon;
  }

  public startstopGame() {
    this.trackerService.toggleGame();
  }

  onLevelChange(event: any) {
    switch (event.target.value) {
      case "easy":
        this.trackerService.totalTargets = 3;
        break;
      case "medium":
        this.trackerService.totalTargets = 5;
        break;
      case "hard":
        this.trackerService.totalTargets = 8;
        break;
    }
  }

}
