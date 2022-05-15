import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormQuestionnaireComponent } from './my-form-questionnaire.component';

describe('MyFormQuestionnaireComponent', () => {
  let component: MyFormQuestionnaireComponent;
  let fixture: ComponentFixture<MyFormQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
