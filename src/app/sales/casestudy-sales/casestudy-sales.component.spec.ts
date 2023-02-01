import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudySalesComponent } from './casestudy-sales.component';

describe('CasestudySalesComponent', () => {
  let component: CasestudySalesComponent;
  let fixture: ComponentFixture<CasestudySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasestudySalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasestudySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
