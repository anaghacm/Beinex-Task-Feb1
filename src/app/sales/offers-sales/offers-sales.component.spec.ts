import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersSalesComponent } from './offers-sales.component';

describe('OffersSalesComponent', () => {
  let component: OffersSalesComponent;
  let fixture: ComponentFixture<OffersSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
