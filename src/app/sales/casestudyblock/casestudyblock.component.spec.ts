import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyblockComponent } from './casestudyblock.component';

describe('CasestudyblockComponent', () => {
  let component: CasestudyblockComponent;
  let fixture: ComponentFixture<CasestudyblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasestudyblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasestudyblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
