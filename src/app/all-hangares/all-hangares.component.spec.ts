import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHangaresComponent } from './all-hangares.component';

describe('AllHangaresComponent', () => {
  let component: AllHangaresComponent;
  let fixture: ComponentFixture<AllHangaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHangaresComponent]
    });
    fixture = TestBed.createComponent(AllHangaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
