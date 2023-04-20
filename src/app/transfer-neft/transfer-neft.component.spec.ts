import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferNeftComponent } from './transfer-neft.component';

describe('TransferNeftComponent', () => {
  let component: TransferNeftComponent;
  let fixture: ComponentFixture<TransferNeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferNeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferNeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
