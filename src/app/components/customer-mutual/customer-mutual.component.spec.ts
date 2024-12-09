import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMutualComponent } from './customer-mutual.component';

describe('CustomerMutualComponent', () => {
  let component: CustomerMutualComponent;
  let fixture: ComponentFixture<CustomerMutualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerMutualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMutualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
