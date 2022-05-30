import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailContainerComponent } from './form-detail-container.component';

describe('FormDetailContainerComponent', () => {
  let component: FormDetailContainerComponent;
  let fixture: ComponentFixture<FormDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
