import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormThirdPartyContentComponent } from './my-form-third-party-content.component';

describe('MyFormThirdPartyContentComponent', () => {
  let component: MyFormThirdPartyContentComponent;
  let fixture: ComponentFixture<MyFormThirdPartyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormThirdPartyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormThirdPartyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
