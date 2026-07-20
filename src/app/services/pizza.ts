import { Service } from '@angular/core';
import { Pizza } from '../models/pizza';

@Service()
export class PizzaService {

    private pizzas: Pizza[] = [
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

  getPizzas(): Pizza[]{
    return this.pizzas;
  }
}
