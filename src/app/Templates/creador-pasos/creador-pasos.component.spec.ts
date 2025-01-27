import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorPasosComponent } from './creador-pasos.component';

describe('CreadorPasosComponent', () => {
  let component: CreadorPasosComponent;
  let fixture: ComponentFixture<CreadorPasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreadorPasosComponent]
    });
    fixture = TestBed.createComponent(CreadorPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
