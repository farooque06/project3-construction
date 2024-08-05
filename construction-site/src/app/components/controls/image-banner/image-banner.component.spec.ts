import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBannerComponent } from './image-banner.component';

describe('ImageBannerComponent', () => {
  let component: ImageBannerComponent;
  let fixture: ComponentFixture<ImageBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageBannerComponent]
    });
    fixture = TestBed.createComponent(ImageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
