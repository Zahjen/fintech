import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallRiskDistributionComponent } from './overall-risk-distribution.component';

describe('OverallRiskDistributionComponent', () => {
  let component: OverallRiskDistributionComponent;
  let fixture: ComponentFixture<OverallRiskDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallRiskDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRiskDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
