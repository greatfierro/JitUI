import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedItemComponent } from './newsfeed-item.component';

describe('NewsfeedItemComponent', () => {
  let component: NewsfeedItemComponent;
  let fixture: ComponentFixture<NewsfeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsfeedItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsfeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
