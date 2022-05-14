import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormEntrepriseComponent } from './my-form-entreprise.component';

describe('MyFormEntrepriseComponent', () => {
  let component: MyFormEntrepriseComponent;
  let fixture: ComponentFixture<MyFormEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
