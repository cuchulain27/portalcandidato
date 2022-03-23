import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exportar2Component } from './exportar2.component';

describe('Exportar2Component', () => {
  let component: Exportar2Component;
  let fixture: ComponentFixture<Exportar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exportar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exportar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
