import { Component, Output, EventEmitter } from '@angular/core';
import {Pizza} from '../models/pizza';

@Component({
  selector: 'app-pizzas-list',
  standalone: false,
  templateUrl: './pizzas-list.html',
  styleUrl: './pizzas-list.scss',
})

export class PizzasList {

  @Output()
    agregarAlCarrito = new EventEmitter<Pizza>();

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

  pizzas: Pizza[] = [
    {
      name: 'Muzzarella',
      price: 1000,
      stock: true,
      image:'../assets/muzzarella.jpg',
      quantity: 0
    },
    {
      name: 'Napolitana',
      price: 1001,
      stock: true,
      image: '../assets/napolitana.jpg',
      quantity: 0
    },
    {
      name: 'Jamón y Morrón',
      price: 1002,
      stock: false,
      image: '../assets/JyM.jpg',
      quantity: 0
    },
    {
      name: 'Fugazzetta',
      price: 1003,
      stock: true,
      image: '../assets/fugazzeta.jpg',
      quantity: 0
    }
  ];

}
