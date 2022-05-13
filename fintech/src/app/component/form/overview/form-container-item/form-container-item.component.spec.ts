import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContainerItemComponent } from './form-container-item.component';

describe('FormContainerItemComponent', () => {
  let component: FormContainerItemComponent;
  let fixture: ComponentFixture<FormContainerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContainerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
