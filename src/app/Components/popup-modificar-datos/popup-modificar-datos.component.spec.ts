import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModificarDatosComponent } from './popup-modificar-datos.component';

describe('PopupModificarDatosComponent', () => {
  let component: PopupModificarDatosComponent;
  let fixture: ComponentFixture<PopupModificarDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupModificarDatosComponent]
    });
    fixture = TestBed.createComponent(PopupModificarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
