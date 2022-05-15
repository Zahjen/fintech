import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormSumUpComponent } from './my-form-sum-up.component';

describe('MyFormSumUpComponent', () => {
  let component: MyFormSumUpComponent;
  let fixture: ComponentFixture<MyFormSumUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormSumUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormSumUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
