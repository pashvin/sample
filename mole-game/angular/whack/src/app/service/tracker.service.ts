import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  private _totalTargets = 3;
  private _score = 0;
  private _drawEvent = new Subject<number>();
  private _isGameActive = false;
  private _youWin = false;

  constructor() {
    this.randomDraw();
  }

  get totalTargets(): number {
    return this._totalTargets;
  }

  set totalTargets(val: number) {
    this._totalTargets = val;
  }

  get score(): number {
    return this._score;
  }

  get isGameActive(): boolean {
    return this._isGameActive;
  }

  get isUserWon(): boolean {
    return this._youWin;
  }

  public scoreUp() {
    if (!this._isGameActive) return;
    this._score++;
    if (this.score === 5) {
      this._isGameActive = false;
      this._youWin = true;
      this.resetAllTragetToNonActive();
    }
  }

  public scoreDown() {
    if (!this._isGameActive) return;
    this._score--;
  }

  public get getDrawEventNotifier() {
    return this._drawEvent;
  }

  public toggleGame() {
    this._isGameActive = !this._isGameActive;
    this.resetAllTragetToNonActive();
    if (this._isGameActive) {
      this._score = 0;
      this._youWin = false;
    }
  }

  private randomDraw() {
    setInterval((_: any) => {
      if (!this._isGameActive) return;
      let nextNumber = Math.floor(Math.random() * this._totalTargets);
      this._drawEvent.next(nextNumber);
    }, 1000);
  }

  private resetAllTragetToNonActive() {
    this._drawEvent.next(this._totalTargets + 1);
  }
}
