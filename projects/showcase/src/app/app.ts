import { AfterViewInit, Component, ElementRef, OnDestroy, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly motionTarget = viewChild.required<ElementRef<HTMLElement>>('motionTarget');
  private motionContext?: gsap.Context;

  ngAfterViewInit(): void {
    this.motionContext = gsap.context(() => undefined, this.host.nativeElement);
  }

  playAnimation(): void {
    this.motionContext?.revert();
    this.motionContext = gsap.context(() => {
      gsap.fromTo(
        this.motionTarget().nativeElement,
        { rotation: -6, scale: 0.92, y: 12 },
        {
          rotation: 0,
          scale: 1,
          y: 0,
          duration: 0.72,
          ease: 'elastic.out(1, 0.45)',
        },
      );
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.motionContext?.revert();
  }
}
