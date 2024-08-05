import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasHeaderComponent } from './das-header.component';

describe('DasHeaderComponent', () => {
  let component: DasHeaderComponent;
  let fixture: ComponentFixture<DasHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasHeaderComponent]
    });
    fixture = TestBed.createComponent(DasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
