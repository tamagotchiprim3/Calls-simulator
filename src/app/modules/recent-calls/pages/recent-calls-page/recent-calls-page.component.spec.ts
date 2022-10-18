import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCallsPageComponent } from './recent-calls-page.component';

describe('RecentCallsPageComponent', () => {
  let component: RecentCallsPageComponent;
  let fixture: ComponentFixture<RecentCallsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCallsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCallsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
