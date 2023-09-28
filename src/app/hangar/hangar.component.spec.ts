import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarComponent } from './hangar.component';

describe('HangarComponent', () => {
  let component: HangarComponent;
  let fixture: ComponentFixture<HangarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangarComponent]
    });
    fixture = TestBed.createComponent(HangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
