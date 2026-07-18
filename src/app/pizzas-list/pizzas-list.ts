import { Component } from '@angular/core';
import {Pizza} from '../models/pizza';

@Component({
  selector: 'app-pizzas-list',
  standalone: false,
  templateUrl: './pizzas-list.html',
  styleUrl: './pizzas-list.scss',
})

export class PizzasList {
  sumar(pizza: Pizza){
    pizza.quantity++;       
  }
  restar(pizza: Pizza){
    if(pizza.quantity>0){
      pizza.quantity--;
    }
  }

  subtotal(pizza: Pizza): number{
    return pizza.price * pizza.quantity;
  }

  pizzas: Pizza[] = [
    {
      name: 'Muzzarella',
      price: 1000,
      stock: false,
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
      stock: true,
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
