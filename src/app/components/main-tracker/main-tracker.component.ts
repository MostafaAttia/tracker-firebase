import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tracker',
  templateUrl: './main-tracker.component.html',
  styleUrls: ['./main-tracker.component.scss']
})
export class MainTrackerComponent implements OnInit {
  isPaused = false;
  isResumed = false;
  duration;

  constructor() { }

  trackerPaused(duration) {
    this.isPaused = true;
    this.isResumed = false;
    this.duration = duration;
  }

  trackerResumed() {
    this.isResumed = true;
  }

  ngOnInit() {
  }

}
