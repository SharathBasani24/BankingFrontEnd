import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferImpsComponent } from './transfer-imps.component';

describe('TransferImpsComponent', () => {
  let component: TransferImpsComponent;
  let fixture: ComponentFixture<TransferImpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferImpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferImpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
