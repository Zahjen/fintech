import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormContainerComponent } from './my-form-container.component';

describe('MyFormContainerComponent', () => {
  let component: MyFormContainerComponent;
  let fixture: ComponentFixture<MyFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
