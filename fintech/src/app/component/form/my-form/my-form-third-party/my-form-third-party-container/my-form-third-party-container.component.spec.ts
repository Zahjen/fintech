import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormThirdPartyContainerComponent } from './my-form-third-party-container.component';

describe('MyFormThirdPartyContainerComponent', () => {
  let component: MyFormThirdPartyContainerComponent;
  let fixture: ComponentFixture<MyFormThirdPartyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormThirdPartyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormThirdPartyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
