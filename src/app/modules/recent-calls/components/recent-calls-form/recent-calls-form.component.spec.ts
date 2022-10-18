import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCallsFormComponent } from './recent-calls-form.component';

describe('RecentCallsFormComponent', () => {
  let component: RecentCallsFormComponent;
  let fixture: ComponentFixture<RecentCallsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCallsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCallsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
