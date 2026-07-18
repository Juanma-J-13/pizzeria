import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalSelector } from './sucursal-selector';

describe('SucursalSelector', () => {
  let component: SucursalSelector;
  let fixture: ComponentFixture<SucursalSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucursalSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(SucursalSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
