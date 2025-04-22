import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdetailsformComponent } from './postdetailsform.component';

describe('PostdetailsformComponent', () => {
  let component: PostdetailsformComponent;
  let fixture: ComponentFixture<PostdetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostdetailsformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
