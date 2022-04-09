import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern2Component } from './pattern2.component';

describe('Pattern2Component', () => {
  let component: Pattern2Component;
  let fixture: ComponentFixture<Pattern2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattern2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
