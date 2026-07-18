import { Component } from '@angular/core';
import {Pizza} from '../models/pizza';

@Component({
  selector: 'app-pizzas-list',
  standalone: false,
  templateUrl: './pizzas-list.html',
  styleUrl: './pizzas-list.scss',
})

export class PizzasList {
  pizzas: Pizza[] = [
    {
      name: 'Muzzarella',
      price: 1000,
      stock: false,
      image:'../assets/muzzarella.jpg',
    },
    {
      name: 'Napolitana',
      price: 1001,
      stock: true,
      image: '../assets/napolitana.jpg',
    },
    {
      name: 'Jamón y Morrón',
      price: 1002,
      stock: true,
      image: '../assets/JyM.jpg',
    },
    {
      name: 'Fugazzetta',
      price: 1003,
      stock: true,
      image: '../assets/fugazzeta.jpg',
    }
  ];
}
