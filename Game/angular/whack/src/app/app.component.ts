import { Component } from '@angular/core';
import { TrackerService} from './service/tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private tracker : TrackerService) {
    
  }

  get totalTarget() :number {
    return this.tracker.totalTargets;
  }

  get totalScore() : number {
    return this.tracker.score;
  }

  get startstopTitle() : string {
    return this.tracker.isGameActive ? 'Stop' : 'Start';
  }

  get isUserWon() : boolean {
    return this.tracker.isUserWon;
  }

  public startstopGame() {
    this.tracker.toggleGame();
  }

  onLevelChange(event: any) {
    switch (event.target.value) {
      case "easy":
        this.tracker.totalTargets = 3;
        break;
      case "medium":
        this.tracker.totalTargets = 5;
        break;
      case "hard":
        this.tracker.totalTargets = 8;
        break;
    }
  }

}
