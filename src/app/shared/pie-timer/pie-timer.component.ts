import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-pie-timer',
  templateUrl: './pie-timer.component.html',
  styleUrls: ['./pie-timer.component.scss']
})
export class PieTimerComponent implements OnInit {

  @ViewChild("border", {read: ElementRef}) border: ElementRef;
  @ViewChild("loader", {read: ElementRef}) loader: ElementRef;

  @Input() radius: number = 50;
  @Input() seconds: number = 10;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const timer$ = timer(this.milliseconds);
    interval(this.milliseconds / 360)
      .pipe(
        takeUntil(timer$),
        filter(l => l < 360)
      )
      .subscribe(val => this.draw(val));
  }

  private draw(length: number) {
    const r = ( length * Math.PI / 180 )
        , x = Math.sin( r ) * this.radius
        , y = Math.cos( r ) * - this.radius
        , mid = ( length > 180 ) ? 1 : 0
        , anim = 'M 0 0 v -' + this.radius + ' A ' + this.radius + ' ' + this.radius + ' 1 ' 
              + mid + ' 1 ' 
              +  x  + ' ' 
              +  y  + ' z';
 
    this.renderer.setAttribute(this.loader.nativeElement, 'd', anim);
    this.renderer.setAttribute(this.border.nativeElement, 'd', anim);
  }

  get diameter(): number
  {
    return this.radius * 2;
  }

  get milliseconds(): number {
    return this.seconds * 1000;
  }

  get transfromBorder(): string {
    return 'translate(' + this.radius + ', ' + this.radius + ')';
  }

  get transfromLoader(): string {
    return 'translate(' + this.radius + ', ' + this.radius + ') scale(.84)';
  }

}
