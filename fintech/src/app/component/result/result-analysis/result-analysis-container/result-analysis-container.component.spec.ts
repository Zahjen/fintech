import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAnalysisContainerComponent } from './result-analysis-container.component';

describe('ResultAnalysisContainerComponent', () => {
  let component: ResultAnalysisContainerComponent;
  let fixture: ComponentFixture<ResultAnalysisContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultAnalysisContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAnalysisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
