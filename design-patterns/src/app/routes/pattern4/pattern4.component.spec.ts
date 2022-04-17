import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern4Component } from './pattern4.component';

describe('Pattern4Component', () => {
  let component: Pattern4Component;
  let fixture: ComponentFixture<Pattern4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattern4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
