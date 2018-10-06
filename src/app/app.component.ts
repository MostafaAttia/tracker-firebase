import {Component, HostBinding} from '@angular/core';
import {fadeAnimation} from './fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ]
})
export class AppComponent {
  @HostBinding( 'class.page-transitioned' ) pageAnimationFinished: boolean = false;

  pageTransitioned() {
    this.pageAnimationFinished = true;
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
