import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFdComponent } from './customer-fd.component';

describe('CustomerFdComponent', () => {
  let component: CustomerFdComponent;
  let fixture: ComponentFixture<CustomerFdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
