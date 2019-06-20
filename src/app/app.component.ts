import {SessionTimeoutWarningService} from './core/session-timeout/session-timeout-warning.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /**
   *
   */
  constructor(private sessionTimeoutService: SessionTimeoutWarningService) {

    this.sessionTimeoutService.initialize();
  }
}
