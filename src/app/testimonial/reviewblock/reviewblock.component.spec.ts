import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewblockComponent } from './reviewblock.component';

describe('ReviewblockComponent', () => {
  let component: ReviewblockComponent;
  let fixture: ComponentFixture<ReviewblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
