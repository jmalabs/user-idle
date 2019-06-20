// import { SessionTimeoutService } from './session-timeout.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-session-timeout-warning',
  templateUrl: './session-timeout-warning.component.html',
  styleUrls: ['./session-timeout-warning.component.css']
})
export class SessionTimeoutWarningComponent implements OnInit, OnDestroy {
  minutes: number;
  seconds: number;
  timerSubscription: Subscription;
  constructor( public dialogRef: MatDialogRef<SessionTimeoutWarningComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any
    , private timerService: TimerService) {

      this.timerService.timerCount$.next(1);

      if (data && data.countdown) {
        this.minutes = Math.floor((120 - data.countdown) / 60);
        this.seconds = (120 - data.countdown) % 60;
      }

      this.timerSubscription = this.timerService.timerCount$.subscribe(count => {
        console.log('subs' + count);
        console.log('this.minutes' + this.minutes);
        console.log('this.seconds' + this.seconds);
        this.minutes = Math.floor((120 - count) / 60);
        this.seconds = (120 - count) % 60;

      });
  }

  ngOnInit() {
    // this.timerService.timerCount$.next(1);
    // this.timerSubscription = this.timerService.timerCount$.subscribe(count => {
    //   console.log('subs' + count);

    //   this.countdown = 5 - count;

    // });

    // this.countdown = this.dialogRef.componentInstance.countdown;
    // this.sessionTimeoutService.timerCount$.subscribe(count => {

    //   this.countdown = count;
    // });
  }

  ngOnDestroy(): void {

    this.timerSubscription.unsubscribe();
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

  }

}
