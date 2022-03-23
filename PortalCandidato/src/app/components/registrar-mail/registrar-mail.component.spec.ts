import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMailComponent } from './registrar-mail.component';

describe('RegistrarMailComponent', () => {
  let component: RegistrarMailComponent;
  let fixture: ComponentFixture<RegistrarMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
