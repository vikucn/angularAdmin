import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLoanRateComponent } from './change-loan-rate.component';

describe('ChangeLoanRateComponent', () => {
  let component: ChangeLoanRateComponent;
  let fixture: ComponentFixture<ChangeLoanRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeLoanRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLoanRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
