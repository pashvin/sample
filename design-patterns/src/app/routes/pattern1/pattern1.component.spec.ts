import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern1Component } from './pattern1.component';

describe('Pattern1Component', () => {
  let component: Pattern1Component;
  let fixture: ComponentFixture<Pattern1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattern1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
