import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolWidgets } from './cool-widgets';

describe('CoolWidgets', () => {
  let component: CoolWidgets;
  let fixture: ComponentFixture<CoolWidgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolWidgets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolWidgets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
