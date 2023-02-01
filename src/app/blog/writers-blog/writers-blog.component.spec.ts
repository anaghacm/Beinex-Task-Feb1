import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersBlogComponent } from './writers-blog.component';

describe('WritersBlogComponent', () => {
  let component: WritersBlogComponent;
  let fixture: ComponentFixture<WritersBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritersBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritersBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
