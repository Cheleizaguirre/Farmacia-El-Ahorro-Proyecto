import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioConsultationsComponent } from './laboratorio-consultations.component';

describe('LaboratorioConsultationsComponent', () => {
  let component: LaboratorioConsultationsComponent;
  let fixture: ComponentFixture<LaboratorioConsultationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboratorioConsultationsComponent]
    });
    fixture = TestBed.createComponent(LaboratorioConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
