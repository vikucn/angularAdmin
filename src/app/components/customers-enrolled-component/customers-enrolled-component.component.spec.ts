import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersEnrolledComponentComponent } from './customers-enrolled-component.component';

describe('CustomersEnrolledComponentComponent', () => {
  let component: CustomersEnrolledComponentComponent;
  let fixture: ComponentFixture<CustomersEnrolledComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersEnrolledComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersEnrolledComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
