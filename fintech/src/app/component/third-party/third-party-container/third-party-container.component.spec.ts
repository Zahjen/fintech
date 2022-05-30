import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyContainerComponent } from './third-party-container.component';

describe('ThirdPartyContainerComponent', () => {
  let component: ThirdPartyContainerComponent;
  let fixture: ComponentFixture<ThirdPartyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
