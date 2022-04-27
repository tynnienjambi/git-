import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReopsitoriesComponent } from './reopsitories.component';

describe('ReopsitoriesComponent', () => {
  let component: ReopsitoriesComponent;
  let fixture: ComponentFixture<ReopsitoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReopsitoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReopsitoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
