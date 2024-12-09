import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMutualFundComponent } from './add-mutual-fund.component';

describe('AddMutualFundComponent', () => {
  let component: AddMutualFundComponent;
  let fixture: ComponentFixture<AddMutualFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMutualFundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMutualFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
