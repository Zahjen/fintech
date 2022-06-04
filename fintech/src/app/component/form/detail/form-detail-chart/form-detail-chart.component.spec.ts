import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailChartComponent } from './form-detail-chart.component';

describe('FormDetailChartComponent', () => {
  let component: FormDetailChartComponent;
  let fixture: ComponentFixture<FormDetailChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
