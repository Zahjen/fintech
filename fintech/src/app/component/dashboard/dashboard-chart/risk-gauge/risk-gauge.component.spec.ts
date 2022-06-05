import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskGaugeComponent } from './risk-gauge.component';

describe('RiskGaugeComponent', () => {
  let component: RiskGaugeComponent;
  let fixture: ComponentFixture<RiskGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
