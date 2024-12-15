import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPesonalizacionComponent } from './cuentas-pesonalizacion.component';

describe('CuentasPesonalizacionComponent', () => {
  let component: CuentasPesonalizacionComponent;
  let fixture: ComponentFixture<CuentasPesonalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentasPesonalizacionComponent]
    });
    fixture = TestBed.createComponent(CuentasPesonalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
