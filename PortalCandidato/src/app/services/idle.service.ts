import { Injectable } from '@angular/core';
import { Observable, Subscription, Subject, fromEvent, merge, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleService {

  private idle: Observable<any> = new Observable();
  private timer: Subscription = new Subscription();
  private timeOutMilliSeconds: number = 1000;
  private idelSubscription: Subscription = new Subscription();

  public expired: Subject<boolean> = new Subject<boolean>();

  public starWatching(timeOutSeconds : number): Observable<any>{
    this.idle = merge(
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'click'),
      fromEvent(document, 'mousedown'),
      fromEvent(document, 'keypress'),
      fromEvent(document, 'DOMMouseScroll'),
      fromEvent(document, 'mousewheel'),
      fromEvent(document, 'touchmove'),
      fromEvent(document, 'MSPointerMove'),
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'resize'),
    );

    this.timeOutMilliSeconds = timeOutSeconds * 1000;

    this.idelSubscription = this.idle.subscribe((res) =>{
      this.resetTimer();
    });

    this.starTimer();

    return this.expired

  }


  private starTimer() {
    this.timer = timer(this.timeOutMilliSeconds,
      this.timeOutMilliSeconds).subscribe((res) => {
        this.expired.next(true);
      });
  }


  public resetTimer() {
     this.timer.unsubscribe();
     this.starTimer();
  }

  public stopTimer(){
    this.timer.unsubscribe();
    this.idelSubscription.unsubscribe();
  }


  constructor() { }



}
