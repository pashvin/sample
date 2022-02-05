import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitTargetComponent } from './hit-target.component';

describe('HitTargetComponent', () => {
  let component: HitTargetComponent;
  let fixture: ComponentFixture<HitTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitTargetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
