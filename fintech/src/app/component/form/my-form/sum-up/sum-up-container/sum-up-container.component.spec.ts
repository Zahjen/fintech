import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumUpContainerComponent } from './sum-up-container.component';

describe('SumUpContainerComponent', () => {
  let component: SumUpContainerComponent;
  let fixture: ComponentFixture<SumUpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumUpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumUpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
