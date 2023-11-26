import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaConsultationComponent } from './medicina-consultation.component';

describe('MedicinaConsultationComponent', () => {
  let component: MedicinaConsultationComponent;
  let fixture: ComponentFixture<MedicinaConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinaConsultationComponent]
    });
    fixture = TestBed.createComponent(MedicinaConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
