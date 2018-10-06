import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {

  transform(_seconds: any, args?: any): any {
    if (typeof _seconds !== 'number' || _seconds < 0)
      return '00:00:00';

    const hours = Math.floor(_seconds / 3600);
    const minutes = Math.floor((_seconds % 3600) / 60);
    const seconds = Math.floor(_seconds % 60);

    return this.padTime(hours) + ':' + this.padTime(minutes) + ':' + this.padTime(seconds);
  }

  private padTime(t) {
    return t < 10 ? '0' + t : t;
  }

}
