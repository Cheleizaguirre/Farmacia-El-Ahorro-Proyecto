import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenEntregaeditComponent } from './orden-entregaedit.component';

describe('OrdenEntregaeditComponent', () => {
  let component: OrdenEntregaeditComponent;
  let fixture: ComponentFixture<OrdenEntregaeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenEntregaeditComponent]
    });
    fixture = TestBed.createComponent(OrdenEntregaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
