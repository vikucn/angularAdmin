import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBondsComponent } from './customer-bonds.component';

describe('CustomerBondsComponent', () => {
  let component: CustomerBondsComponent;
  let fixture: ComponentFixture<CustomerBondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerBondsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
