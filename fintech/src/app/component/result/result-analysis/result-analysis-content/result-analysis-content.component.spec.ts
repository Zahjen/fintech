import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAnalysisContentComponent } from './result-analysis-content.component';

describe('ResultAnalysisContentComponent', () => {
  let component: ResultAnalysisContentComponent;
  let fixture: ComponentFixture<ResultAnalysisContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultAnalysisContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAnalysisContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
