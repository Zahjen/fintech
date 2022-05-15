import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumUpBodyComponent } from './sum-up-body.component';

describe('SumUpBodyComponent', () => {
  let component: SumUpBodyComponent;
  let fixture: ComponentFixture<SumUpBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumUpBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumUpBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
