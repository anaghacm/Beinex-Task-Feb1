import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferblockComponent } from './offerblock.component';

describe('OfferblockComponent', () => {
  let component: OfferblockComponent;
  let fixture: ComponentFixture<OfferblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
