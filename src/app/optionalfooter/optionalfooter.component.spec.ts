import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalfooterComponent } from './optionalfooter.component';

describe('OptionalfooterComponent', () => {
  let component: OptionalfooterComponent;
  let fixture: ComponentFixture<OptionalfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
