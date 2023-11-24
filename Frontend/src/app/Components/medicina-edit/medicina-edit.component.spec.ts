import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaEditComponent } from './medicina-edit.component';

describe('MedicinaEditComponent', () => {
  let component: MedicinaEditComponent;
  let fixture: ComponentFixture<MedicinaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinaEditComponent]
    });
    fixture = TestBed.createComponent(MedicinaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
