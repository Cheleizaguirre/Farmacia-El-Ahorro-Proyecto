import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaReportComponent } from './medicina-report.component';

describe('MedicinaReportComponent', () => {
  let component: MedicinaReportComponent;
  let fixture: ComponentFixture<MedicinaReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinaReportComponent]
    });
    fixture = TestBed.createComponent(MedicinaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
