import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasList } from './pizzas-list';

describe('PizzasList', () => {
  let component: PizzasList;
  let fixture: ComponentFixture<PizzasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzasList],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
