import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnChanges {
  @Input('task') task?;
  @Output('duration') duration = new EventEmitter();
  @Output('resumed') resumed = new EventEmitter();

  seconds = '00';
  minutes = '00';
  hours = '00';
  interval;
  totalSeconds = 0;

  isStarted = false;
  isPaused = false;

  constructor(private taskService: TaskService) { }

  start() {
    this.isStarted = true;
    this.interval = setInterval( () => {
      this.totalSeconds += 1;

      const toSeconds = this.totalSeconds % 60;
      const toMinutes = Math.floor((this.totalSeconds / 60) % 60);
      const toHours = Math.floor(this.totalSeconds / (60 * 60));

      this.seconds = (toSeconds < 10 ? '0' : '') + toSeconds;
      this.minutes = (toMinutes < 10 ? '0' : '') + toMinutes;
      this.hours = (toHours < 10 ? '0' : '') + toHours;
    }, 1000);

  }

  onPause() {
    this.isPaused = true;
    clearInterval(this.interval);
    delete this.interval;

    if(this.task) {
      this.taskService.updateTask(this.task, this.totalSeconds);
    }

    this.duration.emit(this.totalSeconds);
  }

  onResume() {
    this.isPaused = false;
    if(!this.interval) this.start();

    this.resumed.emit();
  }

  ngOnChanges() {
    if(this.task) {
      this.totalSeconds = this.task.duration;

      const durationHours = String(Math.floor((this.totalSeconds / 3600)));
      const durationMinutes = String(Math.floor(((this.totalSeconds % 3600) / 60)));
      const durationSeconds = String(((this.totalSeconds % 3600) % 60));

      this.hours = (durationHours < 10 ? '0' : '') + durationHours;
      this.minutes = (durationMinutes < 10 ? '0' : '') + durationMinutes;
      this.seconds = (durationSeconds < 10 ? '0' : '') + durationSeconds;
    }
  }

}
