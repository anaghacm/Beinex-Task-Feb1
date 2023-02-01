import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DncBlogComponent } from './dnc-blog.component';

describe('DncBlogComponent', () => {
  let component: DncBlogComponent;
  let fixture: ComponentFixture<DncBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DncBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DncBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
