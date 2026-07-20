import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Pizza} from '../models/pizza';
import { pizza } from '../services/pizza';

@Component({
  selector: 'app-pizzas-list',
  standalone: false,
  templateUrl: './pizzas-list.html',
  styleUrl: './pizzas-list.scss',
})

export class PizzasList implements OnInit {
  pizzas: Pizza[] = [];
  constructor(private pizzaService: pizza){}
  @Output()
    agregarAlCarrito = new EventEmitter<Pizza>();

  ngOnInit(): void {
      this.pizzas = this.pizzaService.getPizzas(); 
  }

  agregar(pizza: Pizza){
    this.agregarAlCarrito.emit(pizza);
  }

  sumar(pizza: Pizza){
    pizza.quantity++;       
  }
  restar(pizza: Pizza){
    if(pizza.quantity>0){
      pizza.quantity--;
    }
  }

  subtotal(pizza: Pizza): number | null{
    if(pizza.stock){
      return pizza.price * pizza.quantity;
    }
      return null;
    
  }

}
