import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConsultationComponent } from './cliente-consultation.component';

describe('ClienteConsultationComponent', () => {
  let component: ClienteConsultationComponent;
  let fixture: ComponentFixture<ClienteConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteConsultationComponent]
    });
    fixture = TestBed.createComponent(ClienteConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
