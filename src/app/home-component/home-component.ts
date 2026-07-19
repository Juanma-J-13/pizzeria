import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})


export class HomeComponent {
  carrito: Pizza[] = [];
  constructor(private router: Router){}

  agregarCarrito(pizza: Pizza){
    if(pizza.quantity == 0){
      return;
    }

    const existe = this.carrito.find(
      p => p.name === pizza.name
    );
    if(existe){
      this.carrito = this.carrito.map(
        p => p.name === pizza.name ? { ...p, quantity: p.quantity + pizza.quantity } : p
      );
    }else{
      this.carrito = [...this.carrito, { ...pizza }];
    }

    pizza.quantity = 0;
  }

  eliminarPizza(pizza: Pizza){
    this.carrito = this.carrito.filter(
      p => p.name !== pizza.name
    );
  }
  vaciarCarrito(){
    this.carrito = [];
  }
  confirmarCompra(){
    this.router.navigate(['/contacto']);
  }

}
