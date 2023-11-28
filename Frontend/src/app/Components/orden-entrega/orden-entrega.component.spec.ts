import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenEntregaComponent } from './orden-entrega.component';

describe('OrdenEntregaComponent', () => {
  let component: OrdenEntregaComponent;
  let fixture: ComponentFixture<OrdenEntregaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenEntregaComponent]
    });
    fixture = TestBed.createComponent(OrdenEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
