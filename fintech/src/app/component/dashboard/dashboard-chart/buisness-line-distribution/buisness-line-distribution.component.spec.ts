import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessLineDistributionComponent } from './buisness-line-distribution.component';

describe('BuisnessLineDistributionComponent', () => {
  let component: BuisnessLineDistributionComponent;
  let fixture: ComponentFixture<BuisnessLineDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuisnessLineDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessLineDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
