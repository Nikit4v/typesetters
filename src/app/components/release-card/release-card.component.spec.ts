import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseCardComponent } from './release-card.component';

describe('ReleaseCardComponent', () => {
  let component: ReleaseCardComponent;
  let fixture: ComponentFixture<ReleaseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseCardComponent]
    });
    fixture = TestBed.createComponent(ReleaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
