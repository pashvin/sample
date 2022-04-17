import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern3Component } from './pattern3.component';

describe('Pattern3Component', () => {
  let component: Pattern3Component;
  let fixture: ComponentFixture<Pattern3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattern3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
