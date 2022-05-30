import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyContentComponent } from './third-party-content.component';

describe('ThirdPartyContentComponent', () => {
  let component: ThirdPartyContentComponent;
  let fixture: ComponentFixture<ThirdPartyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
