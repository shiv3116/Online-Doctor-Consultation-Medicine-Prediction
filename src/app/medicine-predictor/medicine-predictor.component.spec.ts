import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePredictorComponent } from './medicine-predictor.component';

describe('MedicinePredictorComponent', () => {
  let component: MedicinePredictorComponent;
  let fixture: ComponentFixture<MedicinePredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinePredictorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinePredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
