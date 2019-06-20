import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timerCount$ = new Subject<number>();
  constructor() { }
}
