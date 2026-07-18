import { Component, signal } from '@angular/core';
import { Pizza } from './models/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Pervis Pizzeria');

  carrito: Pizza[] = [];

  mostrarPagina = false;
  sucursalElegida = "";

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

  elegirSucursal(nombre: string){
    this.sucursalElegida = nombre;
    this.mostrarPagina = true;
  }
  /** 
  ES PARA CAMBIAR EL TITULO EN EL INPUT DE APP.HTML
    cambiarTitulo(nuevoTitulo: string){
      this.title.set(nuevoTitulo);
    }
  */
}
