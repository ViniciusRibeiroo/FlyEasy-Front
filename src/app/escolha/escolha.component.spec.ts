import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaComponent } from './escolha.component';

describe('EscolhaComponent', () => {
  let component: EscolhaComponent;
  let fixture: ComponentFixture<EscolhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolhaComponent]
    });
    fixture = TestBed.createComponent(EscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
