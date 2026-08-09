import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the Material animation trigger', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const trigger = compiled.querySelector<HTMLButtonElement>('[data-testid="motion-trigger"]');

    expect(trigger).toBeTruthy();
    expect(trigger?.classList.contains('mat-mdc-button-base')).toBe(true);
  });

  it('should play the animation when the trigger is clicked', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const trigger = compiled.querySelector<HTMLButtonElement>('[data-testid="motion-trigger"]');
    const motionTarget = compiled.querySelector<HTMLElement>('[data-testid="motion-target"]');

    trigger?.click();

    expect(motionTarget).toBeTruthy();
    expect(motionTarget?.style.transform).not.toBe('');
  });
});
