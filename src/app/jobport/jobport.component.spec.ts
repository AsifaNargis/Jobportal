import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobportComponent } from './jobport.component';

describe('JobportComponent', () => {
  let component: JobportComponent;
  let fixture: ComponentFixture<JobportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
