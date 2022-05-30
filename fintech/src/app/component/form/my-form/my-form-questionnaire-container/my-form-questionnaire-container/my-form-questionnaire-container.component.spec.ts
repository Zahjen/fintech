import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormQuestionnaireContainerComponent } from './my-form-questionnaire-container.component';

describe('MyFormQuestionnaireContainerComponent', () => {
  let component: MyFormQuestionnaireContainerComponent;
  let fixture: ComponentFixture<MyFormQuestionnaireContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormQuestionnaireContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormQuestionnaireContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
