import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorRecetasComponent } from './visor-recetas.component';

describe('VisorRecetasComponent', () => {
  let component: VisorRecetasComponent;
  let fixture: ComponentFixture<VisorRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisorRecetasComponent]
    });
    fixture = TestBed.createComponent(VisorRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
