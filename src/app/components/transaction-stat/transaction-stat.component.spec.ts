import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionStatComponent } from './transaction-stat.component';

describe('TransactionStatComponent', () => {
  let component: TransactionStatComponent;
  let fixture: ComponentFixture<TransactionStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
