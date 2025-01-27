import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigInputFieldComponent } from './big-input-field.component';

describe('BigInputFieldComponent', () => {
  let component: BigInputFieldComponent;
  let fixture: ComponentFixture<BigInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigInputFieldComponent]
    });
    fixture = TestBed.createComponent(BigInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
