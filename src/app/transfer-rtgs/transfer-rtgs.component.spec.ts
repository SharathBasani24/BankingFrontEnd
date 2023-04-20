import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRtgsComponent } from './transfer-rtgs.component';

describe('TransferRtgsComponent', () => {
  let component: TransferRtgsComponent;
  let fixture: ComponentFixture<TransferRtgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferRtgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferRtgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
