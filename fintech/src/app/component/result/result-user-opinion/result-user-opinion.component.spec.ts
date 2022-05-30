import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUserOpinionComponent } from './result-user-opinion.component';

describe('ResultUserOpinionComponent', () => {
  let component: ResultUserOpinionComponent;
  let fixture: ComponentFixture<ResultUserOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultUserOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultUserOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
