import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGrafifoComponent } from './tabla-grafifo.component';

describe('TablaGrafifoComponent', () => {
  let component: TablaGrafifoComponent;
  let fixture: ComponentFixture<TablaGrafifoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaGrafifoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaGrafifoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
