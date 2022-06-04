import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailAnswerComponent } from './form-detail-answer.component';

describe('FormDetailAnswerComponent', () => {
  let component: FormDetailAnswerComponent;
  let fixture: ComponentFixture<FormDetailAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
