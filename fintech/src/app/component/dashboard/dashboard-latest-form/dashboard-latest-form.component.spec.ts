import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLatestFormComponent } from './dashboard-latest-form.component';

describe('DashboardLatestFormComponent', () => {
  let component: DashboardLatestFormComponent;
  let fixture: ComponentFixture<DashboardLatestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLatestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLatestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
