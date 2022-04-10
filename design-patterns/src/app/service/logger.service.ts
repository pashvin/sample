import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  private logBuffer: string[] = [];

  constructor() {
    this.addLog('Logger service is initialized');
  }

  get logEntries(): string[] {
    return this.logBuffer;
  }

  addLog(entry: string) {
    this.logBuffer.push(entry);
  }

  clearLog() {
    this.logBuffer = [];
  }
}
