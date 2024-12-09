import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDtoComponent } from './customer-dto.component';

describe('CustomerDtoComponent', () => {
  let component: CustomerDtoComponent;
  let fixture: ComponentFixture<CustomerDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
