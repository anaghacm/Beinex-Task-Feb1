import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocompromiseBlogComponent } from './nocompromise-blog.component';

describe('NocompromiseBlogComponent', () => {
  let component: NocompromiseBlogComponent;
  let fixture: ComponentFixture<NocompromiseBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocompromiseBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NocompromiseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
