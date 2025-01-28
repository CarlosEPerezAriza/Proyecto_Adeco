import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPasswordFieldComponent } from './big-password-field.component';

describe('BigPasswordFieldComponent', () => {
  let component: BigPasswordFieldComponent;
  let fixture: ComponentFixture<BigPasswordFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigPasswordFieldComponent]
    });
    fixture = TestBed.createComponent(BigPasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
