import { TimerService } from './timer.service';
// import { DEFAULT_INTERRUPTSOURCES, Idle} from '@ng-idle/core';
import { Injectable } from '@angular/core';
// import { Idle, DEFAULT_INTERRUPTSOURCES };
import { MatDialog, MatDialogRef } from '@angular/material';
import { SessionTimeoutWarningComponent } from './session-timeout-warning.component';
import { UserIdleService } from 'angular-user-idle';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionTimeoutWarningService {
  public idleState = 'Not started.';
  public timedOut = false;
  dialogRef: MatDialogRef <SessionTimeoutWarningComponent>;
  private isDialogActivated = false;
  constructor(private userIdle: UserIdleService, public dialog: MatDialog, private timerService: TimerService) {
    // constructor(private idle: Idle, public dialog: MatDialog) {


  }


  public initialize(): void {
    // Start watching for user inactivity.
    this.userIdle.startWatching();
    // const dialogRef = this.dialog.open(SessionTimeoutWarningComponent, {
    //   data: {
    //     countdown: 1
    //   }
    // dialogRef.afterClosed().pipe(
    //   map(result => {
    //     console.log(result);

    //   })
    // );
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => {

      if (!this.isDialogActivated && count !== null) {
        console.log(count);

        // this.timerService.timerCount$.next(count);
        console.log('isDialogActivated');
        console.log(this.isDialogActivated);

        this.dialogRef = this.dialog.open(SessionTimeoutWarningComponent, {data: {
          countdown: count
        }});
        this.dialogRef.afterClosed().subscribe(result => {

          console.log('afterClosed');
          if (result === true) {
            this.restart();
          }


        });
        this.isDialogActivated = true;

      } else {
        console.log(count);
        this.timerService.timerCount$.next(count);
      }



    });

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => alert('logout!'));
  }

  public stop() {
    this.isDialogActivated = false;
    this.userIdle.stopTimer();
  }

  public stopWatching() {
    this.userIdle.stopWatching();
  }

  public startWatching() {
    this.userIdle.startWatching();
  }

  public restart() {
    this.isDialogActivated = false;
    this.userIdle.resetTimer();
  }

  private openWarningDialog(count: any) {
    // const dialogRef = this.dialog.open(SessionTimeoutWarningComponent, {
    //   data: {
    //     countdown: count
    //   }
    // });
  }
  // public initialize() {
  //   this.idle.setIdle(5);
  //   this.idle.setTimeout(5);
  //   this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

  //   this.idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
  //   this.idle.onTimeout.subscribe(() => {
  //     this.idleState = 'Timed out!';
  //     this.timedOut = true;
  //   });
  //   this.idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
  //   this.idle.onTimeoutWarning.subscribe((countdown) => {
  //     // this.idleState = 'You will time out in ' + countdown + ' seconds!';
  //     const dialogRef = this.dialog.open(SessionTimeoutWarningComponent, {
  //       data: {
  //         countdown: countdown
  //       }
  //     });
  //   });

  //   this.reset();

  // }

  // public reset() {
  //   this.idle.watch();
  //   this.idleState = 'Started.';
  //   this.timedOut = false;
  // }
}
